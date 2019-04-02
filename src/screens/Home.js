import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  AsyncStorage,
  AppRegistry,
  TouchableOpacity,
  WebView
} from 'react-native'

import { goHome, goToAuth } from './Navigation'
import { USER_KEY } from '../config'
import ButtonBasic from '../components/ButtonBasic';
// import request from 'request';

export default class Home extends React.Component {
  state = {
    user_id: '',
    user_password: ''
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  };

  signIn = () => {
    /*
    try {
      // login with provider
      const user = await AsyncStorage.setItem(USER_KEY, user_id);
      console.log('user successfully signed in!', user);
      goHome()
    } catch (err) {
      console.log('error:', err)
    }
    */
  };

  static get options() {
    return {
      topBar: {
        visible: false,
        height: 0
      }
    };
  }

  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  };

  render() {
    return (
      <WebView
        source={{url: 'https://auth.zipview.kr/signin'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  formRow: {
    flexDirection: 'row',
  },

  formItem: {
    flex: 0.7,
  },

  textInput: {
    height: 40,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 12
  },
});
