import React, {Component} from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Text>ABC</Text>
      /*
      <WebView
        source={{uri: 'http://360.zipview.kr/#/product/ZV001'}}
      />
      */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
