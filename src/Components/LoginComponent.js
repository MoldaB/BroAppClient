import React, { Component } from 'react';
import { 
    TextInput ,
    Text, 
    View, 
    TouchableHighlight,
    StyleSheet 
} from 'react-native';


class LoginComponent extends Component {
    
    usernameChanged(event) {
        console.log(event);
    }

    passwordChanged(event) {
        console.log(event);
    }

    loginButtonPressed() {

    }

    render() {
        return(
            <View style={styles.contentView}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.usernameChanged.bind(this)}
                    placeholder={"USERNAME"} />
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={this.passwordChanged.bind(this)} 
                        placeholder={"PASSWORD"} />
                <TouchableHighlight 
                    onPress= {this.loginButtonPressed.bind(this)}
                    style= {styles.loginButton}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default LoginComponent

const styles = {
    contentView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10   
    },
    textInput: {
        height: 44,
        width: 300,
        borderRadius: 5,
        borderColor: '#343434',
        borderWidth: 1,
    },
    LoginButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        height: 30,
        width: 100,
        backgroundColor: 'steelblue',
    }
};