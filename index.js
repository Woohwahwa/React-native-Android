import App from './App';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from "./src/store";
import { addArticle } from "./src/store/actions";
import request from 'request';

window.store = store;
window.addArticle = addArticle;

Navigation.registerComponent(`navigation.playground.App`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.App'
      }
    }
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  document.getElementById("app")
  // document.getElementById("root")
);