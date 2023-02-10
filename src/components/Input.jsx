import React from 'react'
import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons'


const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83d6e3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const InputText = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: #268596;
  margin-left: 10px;
  padding: 10px;
`;


const Input = (props) => {
  const { IconName, placeholder, value, onChangeText, password } = props
  return (
    <InputArea>
      <Entypo name={IconName} size={24} color='#268596' />
      <InputText
        style={{ outline: 'none' }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  )
}

export default Input
