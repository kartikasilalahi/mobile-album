/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Headers from './src/component/Header'
import AlbumList from './src/component/AlbumList'

const App = () => {
  return (
    <View style={{ flex: 1, marginBottom: 10 }}>
      <Headers name={'Albums'} />
      <AlbumList />
    </View>
  );
};

export default App;
