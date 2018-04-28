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
      //First Main Scene is with one sub scene
      <Router sceneStyle={ {paddingTop : 64} }>
        <Scene key='auth'>
          <Scene
            key='login'
            component={LoginComponent}
            title='Login'/>
        </Scene>
      </Router>
    );
  }
}