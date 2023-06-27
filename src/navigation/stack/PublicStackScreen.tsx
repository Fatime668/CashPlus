import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ConfirmCodeScreen from '../screens/ConfirmCodeScreen';

type AuthenticationStackParamList = {
  //   Login: undefined;
  Register: undefined;
  Confirm: undefined;
};

const PublicStack = createNativeStackNavigator<AuthenticationStackParamList>();

const PublicStackScreen = () => {
  return (
    <PublicStack.Navigator>
      {/* <PublicStack.Screen name="Login" component={LoginScreen} /> */}
      <PublicStack.Screen name="Register" component={RegisterScreen} />
      <PublicStack.Screen name="Confirm" component={ConfirmCodeScreen} />
    </PublicStack.Navigator>
  );
};

export default PublicStackScreen;
