import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '../features/dashboard/screens/Dashboard';
const Stack = createNativeStackNavigator();

const SignInStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export {SignInStack};
