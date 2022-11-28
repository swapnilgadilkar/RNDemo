import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectCurrentUser} from '../features/authentication/authSlice';
import {SignInStack} from './SignInStack';
import {AuthStack} from './AuthStack';

export const RootStack = () => {
  const isUserLoggedIn = useSelector(selectCurrentUser);
  return (
    <NavigationContainer>
      {isUserLoggedIn ? <SignInStack/> : <AuthStack />}
    </NavigationContainer>
  );
};
