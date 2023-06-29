import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import ConfirmCodeScreen from '../screens/ConfirmCodeScreen';

type AuthenticationStackParamList = {
  Register: undefined;
  Confirm: undefined;
};

const PublicStack = createNativeStackNavigator<AuthenticationStackParamList>();

const PublicStackScreen = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen name="Register" component={RegisterScreen} />
      <PublicStack.Screen name="Confirm" component={ConfirmCodeScreen} />
    </PublicStack.Navigator>
  );
};

export default PublicStackScreen;
