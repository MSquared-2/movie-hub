/**
 * @format
 */
import React from 'react';
import { View, AppRegistry } from 'react-native';
import firebase from 'firebase';
//import Login from './components/Login';
import AppNavigator from './components/AppNavigator';

const config = {
    databaseURL: 'https://movie-hub-c24f8.firebaseio.com',
    projectId: 'movie-hub-c24f8',
};
firebase.initializeApp(config);

const App = () => (
    <View style={{ flex: 1 }}>
        <AppNavigator />
    </View>
);
export default App;
AppRegistry.registerComponent('MovieHub', () => App);
