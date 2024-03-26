import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {ResturantScreen} from './screens/ResturantScreen';
import {CartScreen} from './screens/CartScreen';

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen
          name="Cart"
          options={{presentation: 'modal'}}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
