import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import ConfirmCodeScreen from '../screens/ConfirmCodeScreen';
import CreditOrderScreen from '../screens/CreditOrderScreen';
import CreditApproveScreen from '../screens/CreditApproveScreen';

type AuthenticationStackParamList = {
  Register: undefined;
  Confirm: undefined;
  CreditOrder: undefined;
  CreditApprove: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Confirm" component={ConfirmCodeScreen} />
      <Stack.Screen name="CreditOrder" component={CreditOrderScreen} />
      <Stack.Screen name="CreditApprove" component={CreditApproveScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
