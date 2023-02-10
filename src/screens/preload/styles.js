import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #63c2d1;
  padding: 10px;

`;

export const View = styled.View`
  width: 300px;
  height: 300px;
  `

export const Image = styled.Image`
  width: 100%;
  border: none;
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  
`
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`
