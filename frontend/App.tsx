import * as React from 'react';
import { AuthenticationNavigator } from './Authentication';
import { createStackNavigator } from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './components/Theme';
import { AppRoutes } from './components/Navigation';

const AppStack = createStackNavigator<AppRoutes>();


export const App =()=>{
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
            <AuthenticationNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
      {/* <SafeAreaProvider>
          <AppStack.Navigator screenOptions={{ headerShown: false }} >
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
            {/* <AppStack.Screen name="Home" component={HomeNavigator} /> */}
          {/* </AppStack.Navigator>
      </SafeAreaProvider> */}
    </ThemeProvider> 
  );
}

