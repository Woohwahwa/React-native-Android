// import React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import App from './App';
// import configureStore from './src/store/configureStore';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

/*
const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('CindyStudy', () => RNRedux);
*/

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Home'
      }
    },
  });
});