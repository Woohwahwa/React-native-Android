import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./screens/Home').default);
  Navigation.registerComponent('Initialising', () => require('./screens/Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./screens/Auth/SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./screens/Auth/SignUp').default);
  Navigation.registerComponent('List', () => require('./screens/List').default);


}