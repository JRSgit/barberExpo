import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator()


import Home from '../screens/home/Home'
import Search from '../screens/search/Search'
import Appointments from '../screens/appointments/Appointments'
import Favorites from '../screens/favorites/Favorites'
import Profile from '../screens/profile/Profile'

import CustomTabBar from "../components/CustomTabBar";

const MainTab = () => (
  <Tab.Navigator
    tabBar={props => <CustomTabBar {...props} />}
    screenOptions={{
      headerShown: false
    }}

  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Appointments" component={Appointments} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
)

export default MainTab
