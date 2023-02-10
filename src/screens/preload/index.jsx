import React, { useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import {
  Container,
  Image,
  View,
  LoadingIcon
} from './styles'

import Api from '../../Api'

import BarberLogo from '../../img/barber.png'

const Preload = () => {
  const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation()

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token !== null) {
        //validar token
        let res = await Api.checkToken(token)

        if (res.token != null) {
          await AsyncStorage.setItem('token', res.token)

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar
            }
          })

          navigation.reset({
            routes: [{
              name: 'MainTab'
            }]
          })

        } else {
          navigation.navigate('SignIn')
        }

      } else {
        alert(token)
        navigation.navigate('SignIn')
      }
    }
    checkToken()
  }, [])

  return (
    <Container >
      <View>
        <Image source={BarberLogo} />
      </View>
      <LoadingIcon size="large" color="#ffff" />
    </Container>
  )
}

export default Preload

