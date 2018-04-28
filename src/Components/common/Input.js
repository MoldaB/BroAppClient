import React from 'react';
import { TextInput, Text, View } from 'react-native';


const Input = ({keyboardType,
                secureTextEntry,
                placeholder,
                autoCapitalize,
                label ,
                value,
                onChangeText }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}/>
        </View>
    );
}

const styles = {
    inputStyle: {
        color: '#000',
        flex:2,
        paddingRight: 4,
        paddingLeft: 4,
        fontSize: 18,
        lineHeight:23
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex:1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}

export { Input };