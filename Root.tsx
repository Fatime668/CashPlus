import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RegisterScreen from './src/navigation/screens/RegisterScreen';
import ConfirmCodeScreen from './src/navigation/screens/ConfirmCodeScreen';

const Root = () => {
  const [loading, setloading] = useState(true);

  const openScreen = () => {
    // if (!loading) {
    //   if (isLoggedIn.value) {
    //     return <DashboardScreen />;
    //   } else {
    //     return <PublicStackScreen />;
    //   }
    // } else {
    //   return <Text>loading...</Text>;
    // }
  };
  return (
    // <View>
    <ConfirmCodeScreen />
    // </View>
  );
};

export default Root;

const styles = StyleSheet.create({});
