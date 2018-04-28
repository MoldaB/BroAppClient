import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerContainerStyle}>
            <ActivityIndicator 
                            animating={true}
                            size={size || 'large'}
                            />
        </View>
    );
};

const styles = {
    spinnerContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'          
    }
}

export { Spinner };
