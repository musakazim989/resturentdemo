import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {featured} from '../constants';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

export const CartScreen = () => {
  const resturant = featured.resturants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      {/* back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="absolute z-10 rounded-full shadow top-5 left-2">
        <Icon.ArrowLeft stroke="white" strokeWidth={3} width={30} height={30} />
      </TouchableOpacity>

      <View>
        <Text className="text-center font-bold text-2xl mt-2">Your cart </Text>
        <Text className="text-center text-gray-500 ">{resturant.name}</Text>

        {/* deliver time */}
        <View
          style={{backgroundColor: themeColors.bgColor(0.2)}}
          className="flex-row py-4 px-4 items-center ">
          <Image
            source={require('../assets/images/fooddelivery.png')}
            className="w-20 h-20 transformscale scale-x-[-1]"
          />
          <Text className="flex-1 font-bold text-center">
            Delivery in 20-30 minutes
          </Text>
          <TouchableOpacity>
            <Text className="font-bold" style={{color: themeColors.text}}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
