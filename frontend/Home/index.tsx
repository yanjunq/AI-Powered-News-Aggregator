import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeNavigationProps } from '../components/navigation/Navigation';
import {NewsPage} from './NewsPage';
import { Preference } from './Preference';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="NewsPage" component={NewsPage} />
      <HomeStack.Screen name="Preference"component={Preference} />
    </HomeStack.Navigator>
  );
};