import React, { Component, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import Axios from 'axios'
import AlbumDetail from './AlbumDetail'

const AlbumList = () => {
    const [dataAlbum, setdataAlbum] = useState([]);

    useEffect(() => {
        async function albumlist() {
            try {
                let { data } = await Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
                setdataAlbum(data)
            } catch (error) {
                console.log(error);
            }
        }
        albumlist()
    }, [])

    const renderAlbum = () => {
        if (dataAlbum.length === 0) {
            return <ActivityIndicator size="small" color="#00ff00" />
        }
        return dataAlbum.map((album, i) => {
            return <AlbumDetail key={album.title} album={album} />
        })
    }

    console.log(dataAlbum)

    return (
        <ScrollView>
            {renderAlbum()}
        </ScrollView>
    )

}

export default AlbumList