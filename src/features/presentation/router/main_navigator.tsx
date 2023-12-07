import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoadingScreen} from '../screens/loading/loading_screen';
import {HomeScreen} from '../screens/home/home_screen';
import {DetailsScreen} from '../screens/details/details_screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavouriteScreen } from '../screens/favourite/favourite_screen';
const Stack = createNativeStackNavigator();
export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loading"
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
          }}
          component={LoadingScreen}
        />
        <Stack.Screen
          name="details"
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
          }}
          component={DetailsScreen}
        />
        <Stack.Screen
          name="favourite"
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
          }}
          component={FavouriteScreen}
        />
                <Stack.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
