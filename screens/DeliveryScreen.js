import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';

export const DeliveryScreen = () => {
  const resturant = featured.resturants[0];
  const navigation = useNavigation();
  console.log(resturant.lat, resturant.lang);
  return (
    <View className="flex-1 ">
      {/* map view */}

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.lang,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        // className="flex-1"
      >
        <Marker
          coordinate={{latitude: resturant.lat, longitude: resturant.lang}}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
