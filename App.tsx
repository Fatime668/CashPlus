import React from 'react';
// import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/stack/MainStack';

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
