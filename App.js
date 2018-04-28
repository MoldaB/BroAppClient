/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import LoginComponent from './src/Components/LoginComponent';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <LoginComponent/>      
      </View>
    );
  }
}