import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import {DishRow} from '../components/dishRow';
import {CartIcon} from '../components/cartIcon';

export function ResturantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  // console.log('resturant: ', item);
  return (
    <View>
      <CartIcon />
      <StatusBar
        barStyle="light-content"
        //  backgroundColor="orange"
      />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-6 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require('../assets/images/star.png')}
                  className="h-4 w-4"
                />
                <Text className="text-green-500 text-xs">
                  <Text>{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) .{' '}
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">
                  Nearby. {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => {
            return <DishRow item={{...dish}} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
