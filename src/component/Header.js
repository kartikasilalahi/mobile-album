import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Headers = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
})

export default Headers