import Reac, { useContext } from "react";
import styled from "styled-components/native"
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { UserContext } from '../contexts/UserContext'

const TabArea = styled.View`
  height: 60px;
  background-color: #4EADBE;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4EADBE;
  margin-top: -20px;
`;
const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;


const CustomTabBar = ({ state, navigation }) => {
  const { state: user } = useContext(UserContext)

  const goTo = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <AntDesign style={{ opacity: state.index === 0 ? 1 : 0.5 }} name="home" size={24} color="#fff" />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <AntDesign style={{
          opacity: state.index === 1 ? 1 : 0.5
        }} name="search1" size={24} color="#fff" />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Appointments')}>
        <AntDesign name="calendar" size={32} color="#4EADBE" />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Favorites')}>
        <AntDesign style={{ opacity: state.index === 3 ? 1 : 0.5 }} name="hearto" size={24} color="#fff" />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar ? (
          <AvatarIcon source={{ uri: user.avatar }} />
        ) : (
          <FontAwesome style={{ opacity: state.index === 4 ? 1 : 0.5 }} name="user-circle" size={24} color="#fff" />
        )}
      </TabItem>
    </TabArea>

  )
}

export default CustomTabBar
