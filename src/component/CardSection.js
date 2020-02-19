import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ffff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#dddd',
        position: 'relative'
    }
})

export default CardSection;