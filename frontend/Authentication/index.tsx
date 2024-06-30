import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Onboarding from './Onboarding';
import {Welcome} from "./Welcome";
// import Login from './Login';
// import SignUp from './SignUp';
// import ForgotPassword from './ForgotPassword';
// import PasswordChanged from './PasswordChanged';

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};


