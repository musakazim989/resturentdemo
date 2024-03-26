import {View, Text, Image, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const OrderPreparing = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      //move to the delivery screen
      navigation.navigate('Delivery');
    }, 3000);
  });
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        // className="h-80 w-80"
        style={{flex: 1, maxWidth: width, maxHeight: width}}
        source={require('../assets/images/delivery.gif')}
      />
    </View>
  );
};
