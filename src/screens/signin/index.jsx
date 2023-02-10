import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../../contexts/UserContext'

import {
  Container,
  LoadingIcon,
  Image,
  InputArea,
  CustomButton,
  CustomBottonText,
  SingMessageButton,
  SingMessageText,
  SignMessageTextBold,
} from './styles'

import Api from '../../Api'

import Input from '../../components/Input'

import BarberLogo from '../../img/barber.png'


const SignIn = () => {
  const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleMessageButtonClick = async () => {
    navigation.reset({
      routes: [{ name: 'SignUp' }]
    })
  }

  const handleSignLogin = async () => {
    setLoading(true)
    if (email != '' && password != '') {
      let res = await Api.signIn(email, password)

      if (res.token) {

        await AsyncStorage.setItem('token', res.token)

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar
          }
        });

        navigation.reset({
          routes: [{
            name: 'MainTab'
          }]
        })

        setLoading(false)
        console.log(res.token)
      } else {
        alert("Email e/ou Senha errados!")
        setLoading(false)
      }

    } else {
      alert("Preencha os campos de email e senha")
      setLoading(false)
    }

  }

  return (
    <Container>
      <Image source={BarberLogo} />
      <InputArea>
        <Input
          IconName="email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={t => setEmail(t)}

        />
        <Input
          IconName="key"
          placeholder="Digite sua Senha"
          value={password}
          onChangeText={t => setPassword(t)}
          password='password'
        />

        <CustomButton onPress={handleSignLogin}>
          {loading ? (<LoadingIcon size="large" color="#ffff" />)
            : (
              <CustomBottonText><Entypo name='login' size={24} color='#999' /> LOGIN</CustomBottonText>
            )}
        </CustomButton>
      </InputArea>

      <SingMessageButton onPress={handleMessageButtonClick}>
        <SingMessageText>Ainda não possui uma conta?</SingMessageText>
        <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
      </SingMessageButton>

    </Container>
  )
}

export default SignIn
