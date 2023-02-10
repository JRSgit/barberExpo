import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
margin-top: 20px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;

`
export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`
export const CustomBottonText = styled.Text`
  font-size: 20px;
  align-items: center;
  justify-content: center;
  color: #fff;
  
  
`
export const SingMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
`
export const SingMessageText = styled.Text`
  font-size: 16px;
  color: #268596;
`
export const SignMessageTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;

`
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 0px;
`
