import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from './src/Components/LoginComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      //First Main Scene is with one sub scene
      <Router sceneStyle={ {paddingTop : 64} }>
        <Scene key='scene_main_1_key'>
          <Scene
            key='scene_1_key'
            component={scene_1_component}
            title='scene_1_navigation_item_title'/>
        </Scene>
        //Second Main Scene is with multiple sub scenes
        <Scene key='scene_main_1_key'>
          <Scene
            key=scene_2_key
            component={scene_2_component}
            title='scene_2_navigation_item_title'/>
            rightTitle='right_button_item'
            onRight={() => {}}
            initial/>
          <Scene
            key='scene_3_key'
            component={scene_3_component}
            title='scene_3_navigation_item_title'/>
        </Scene>
      </Router>
        <LoginComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
