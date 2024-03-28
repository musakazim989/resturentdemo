import {View, Text} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export const DeliveryScreen = () => {
  const resturant = featured.resturants[0];
  const navigation = useNavigation();
  console.log(resturant.lat, resturant.lang);
  return (
    <View className="flex-1 ">
      {/* map view */}

      {/* <Text>delivery screen</Text> */}

      <MapView
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.lang,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        }}
        className="flex-1 ">
        <Marker
          coordinate={{latitude: resturant.lat, longitude: resturant.lang}}
        />
      </MapView>
    </View>
  );
};
