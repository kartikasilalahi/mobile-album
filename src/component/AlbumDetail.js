import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import Cards from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({ album }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album

    const {
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
    } = styles;

    return (
        <Cards>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={{ height: 300, flex: 1 }}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} > Buy Now </Button>
            </CardSection>
        </Cards>
    )
}

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 8,
        marginRight: 10
    }
})

export default AlbumDetail