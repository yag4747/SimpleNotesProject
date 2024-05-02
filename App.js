import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './app/app_navigator/appNavigator';
import store from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
