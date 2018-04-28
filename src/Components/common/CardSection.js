import React from 'react';
import {
    View,
} from 'react-native';

const CardSection = (props) => {
    return (
        //style = {[array of styles]} - most right style override all other styles
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: "#ddd",
        position: 'relative'
    }
}

export {CardSection};