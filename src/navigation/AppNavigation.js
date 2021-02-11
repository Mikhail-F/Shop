import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "../screens/MainScreen";

const Stack = createStackNavigator();

const ListOfProducts = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Список товаров', headerTintColor: '#25262B', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const AppNavigation = ListOfProducts
