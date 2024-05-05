import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';

export const DeliveryScreen = () => {
  const resturant = featured.resturants[0];
  const navigation = useNavigation();
  return (
    <View className="flex-1 relative">
      {/* map view */}

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.lang,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
        // className="flex-1"
      >
        <Marker
          coordinate={{
            latitude: resturant.lat,
            longitude: resturant.lang,
          }}
          //below code not working in my application
          // title={resturant.name}
          // description={resturant.description}
          // pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white absolute bottom-0 w-full">
        <View className="flex-row justify-between px-5 pt-10 pb-8">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is on it's way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require('../assets/images/fooddelivery.gif')}
          />
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(0.8)}}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View
            className="flex-row items-center p-1 rounded-full"
            style={{backgroundColor: 'rgba(255,255,255,.4'}}>
            <View className="border-white border-2 rounded-full">
              <Image
                className="h-16 w-16 rounded-full"
                source={require('../assets/images/star.jpeg')}
              />
            </View>

            <View className="flex-1 ml-3">
              <Text className="text-lg font-bold text-white">Musa Kazim</Text>
              <Text className=" font-semibold text-white">Your Rider</Text>
            </View>

            <View className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone fill={'green'} stroke={'green'} strokeWidth={1} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                className="bg-white p-2 rounded-full">
                <Icon.X
                  fill={themeColors.bgColor(1)}
                  stroke={'red'}
                  strokeWidth={4}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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

const mapCustomStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
