import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import ConfirmCodeScreen from '../screens/ConfirmCodeScreen';

type AuthenticationStackParamList = {
  Register: undefined;
  Confirm: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Confirm" component={ConfirmCodeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
