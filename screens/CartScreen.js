import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
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
    </View>
  );
};
