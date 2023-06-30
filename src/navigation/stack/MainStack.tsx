import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import ConfirmCodeScreen from '../screens/ConfirmCodeScreen';
import CreditOrderScreen from '../screens/CreditOrderScreen';
import CreditApproveScreen from '../screens/CreditApproveScreen';
import OrderNumberScreen from '../screens/OrderNumberScreen';
import OrderCompleteScreen from '../screens/OrderCompleteScreen';

type AuthenticationStackParamList = {
  Register: undefined;
  Confirm: undefined;
  CreditOrder: undefined;
  CreditApprove: undefined;
  OrderNumber: undefined;
  OrderComplete: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Confirm" component={ConfirmCodeScreen} />
      <Stack.Screen name="CreditOrder" component={CreditOrderScreen} />
      <Stack.Screen name="CreditApprove" component={CreditApproveScreen} />
      <Stack.Screen name="OrderNumber" component={OrderNumberScreen} />
      <Stack.Screen name="OrderComplete" component={OrderCompleteScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
