import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './src/redux/store';
import {tokenCheck} from './src/util/authHelper';
import {login, signout} from './src/redux/slices/loginSlice';
import Dashboard from './src/navigation/screens/Dashboard';
import PublicStackScreen from './src/navigation/stack/PublicStackScreen';
import {ActivityIndicator} from 'react-native-paper';
import ConfirmCodeScreen from './src/navigation/screens/ConfirmCodeScreen';

const Root = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login);
  const [loading, setloading] = useState(true);
  let dispatch = useDispatch();

  useEffect(() => {
    tokenCheck().then(res => {
      if (res) {
        setloading(false);
        dispatch(login());
      } else {
        setloading(true);
        dispatch(signout());
      }
    });
  }, []);

  const openScreen = () => {
    if (!loading) {
      if (isLoggedIn.value) {
        return <Dashboard />;
      } else {
        return <PublicStackScreen />;
      }
    } else {
      return <ActivityIndicator />;
    }
  };

  // return <>{openScreen()}</>;
};

export default Root;
