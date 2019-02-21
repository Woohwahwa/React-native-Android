import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { goToAuth } from './Navigation'
import { Navigation } from 'react-native-navigation';

import { USER_KEY } from '../config'

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
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
      <View style={styles.container}>
        <Text>Hello from Home screen</Text>
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          onPress={() => {
            Navigation.push('App', {
              component: {
                name: 'List'
              }
            });
            console.log('props; ', this.props);
          }}
          title="List View"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});