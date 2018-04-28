// 1. import libraries
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// 2. create component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent:'center',
        alignItems: 'center',
        height: 64,
        shadowOpacity: 0.2,
        shadowColor: '#000',
        shadowOffset: { width:0,height:0 },
        paddingTop: 20,
        elevation: 2,
    }
});

// 3. make the component available render component
export {Header};