import * as Icon from 'react-native-feather';
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {themeColors} from '../theme';
import {Categories} from '../components/categories';
import {FeaturedRow} from '../components/featuredRow';
import {featured} from '../constants/index';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View
          className="flex-row flex-1 items-center mt-3 px-3 border rounded-full border-gray-300
          ">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Resturants" className="ml-2 flex-1 " />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 p-1 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
          </View>
          <Text className="text-gray-600">New York, NYC</Text>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="mt-3 p-2 rounded-full ">
          <Icon.Sliders
            height="25"
            width="25"
            strokeWidth={2.5}
            stroke="white"
            className="  "
          />
        </View>
      </View>

      {/* mian */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        {/* categories */}

        <Categories />

        {/* featured */}

        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                resturants={item.resturants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
