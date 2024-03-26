import {View, Text} from 'react-native';
import React from 'react';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';

export const DeliveryScreen = () => {
    const resturant= featured.resturants[0]
    const navigation = useNavigation()
  return (
    <View className="flex-1 ">
      <Text>DeliveryScreen</Text>
    </View>
  );
};
