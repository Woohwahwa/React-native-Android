import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class ButtonBasic extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    onPress: () => null,
  };

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
        onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor}
        ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 15,
  },
});