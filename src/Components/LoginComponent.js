import React, { Component } from 'react';
import { 
    TextInput ,
    Text, 
    View, 
    TouchableHighlight,
    StyleSheet 
} from 'react-native';

import { 
    Card, 
    CardSection, 
    Input, 
    Button 
} from './common';

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
            <Card>
                <CardSection>
                    <Input
                        autoCapitalize={'none'}
                        keyboardType={"email-address"}
                        value={this.props.email}
                        label='Username'
                        placeholder='your name bro'
                        onChangeText={this.usernameChanged.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Input
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                        value={this.props.password}
                        label='Password'
                        placeholder='******** ***'
                        onChangeText={this.passwordChanged.bind(this)} />
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{console.log("Login Pressed");}}>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginComponent