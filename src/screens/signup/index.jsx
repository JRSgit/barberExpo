import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { UserContext } from '../../contexts/UserContext'

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


const SignUp = () => {
  // const { dispatch: userDispatch } = useContext(UserContext)
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    })
  }

  const handleSignUpRegister = async () => {
    setLoading(true)
    if (name != '' && email != '' && password != '') {

      let res = await Api.signUp(name, email, password)

      if (res.token) {

        await AsyncStorage.setItem('token', res.token)

        // userDispatch({
        //   type: 'setAvatar',
        //   payload: {
        //     avatar: res.data.avatar
        //   }
        // });

        // navigation.reset({
        //   routes: [{
        //     name: 'MainTab'
        //   }]
        // })

        setLoading(false)
      } else {
        alert("Error:" + res.error)
        setLoading(false)
      }
    } else {
      alert("Preencha os campos de Nome, Email e Senha!")
      setLoading(false)
    }
  }

  // =================================================
  return (
    <Container>
      <Image source={BarberLogo} />
      <InputArea>
        <Input
          IconName="user"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={t => setName(t)}

        />
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

        <CustomButton onPress={handleSignUpRegister}>
          {loading ? (<LoadingIcon size="large" color="#ffff" />)
            : (
              <CustomBottonText><Entypo name='login' size={24} color='#999' /> REGISTER</CustomBottonText>
            )}

        </CustomButton>
      </InputArea>

      <SingMessageButton onPress={handleMessageButtonClick}>
        <SingMessageText>Já tenho conta!</SingMessageText>
        <SignMessageTextBold>Login</SignMessageTextBold>
      </SingMessageButton>

    </Container>
  )
}

export default SignUp
