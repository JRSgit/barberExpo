import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';

import BarberItem from '../../components/BarberItem';

import * as Location from 'expo-location';

import Api from '../../Api';

import {
  ListArea,
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  LocationArea,
  SearchButton,
  LocationFinder,
  LocationInput,
  LoadingIcon,
} from './styles';

const Home = () => {
  const navigation = useNavigation()

  const [locationText, setLocationText] = useState('')
  const [coods, setCoodrs] = useState(null)
  const [loading, setLoading] = useState(false)
  const [barbers, setBarbers] = useState([])
  const [list, setList] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  // handleLocationFinder
  const handleLocationFinder = async () => {
    setCoodrs(null)

    //pedir permição
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status === 'granted') {
      setLoading(true)
      setLocationText('')
      setList([])

      let info = await Location.getCurrentPositionAsync({});
      setCoodrs(info.coords)
      getBarders()
    } else {
      alert("Permission not garented")
      return

    }

  }

  useEffect(() => {
    getBarders()
  }, [])

  //Finds Barbers
  const getBarders = async () => {
    setLoading(true)
    setList([])

    let lat = null
    let lng = null

    if (coods) {
      lat = coods.latitude
      lng = coods.longitude
    }

    const res = await Api.getBarbers(lat, lng, locationText)

    if (res.error == '') {
      if (res.loc) {
        setLocationText(res.loc)
      }
      setList(res.data)
      setLoading(false)
    } else {
      alert("Error: " + res.error)
    }
  }

  const onRefresh = () => {
    setRefreshing(false)
    getBarders()
  }

  const handleLocationSearch = () => {
    setCoodrs({})
    getBarders()
  }

  // ===============================================
  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>

        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre seu barbeiro Favorito</HeaderTitle>
          <SearchButton>
            <AntDesign
              onPress={() => navigation.navigate('Search')}
              name='search1'
              size={26} color='#fff' />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            style={{ outline: 'none' }}
            placeholder="Onde você está?"
            placeholderTextColor='#dddddd'
            onChangeText={(t) => setLocationText(t)}
            onEndEditing={handleLocationSearch}
            value={locationText}

          />
          <LocationFinder onPress={handleLocationFinder}>
            <Entypo name='location' size={26} color='#fff' />
          </LocationFinder>
        </LocationArea>

        {
          loading && <LoadingIcon size='large' color='#fff' />
        }

        <ListArea>
          {list.map((item, k) => (
            <BarberItem key={k} data={item} />
          ))}
        </ListArea>

      </Scroller>
    </Container>
  );
}

export default Home;