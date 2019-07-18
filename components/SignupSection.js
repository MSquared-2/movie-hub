import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Signup extends React.Component {
    gotoSignup = () => {
        Actions.signup();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text 
                style={styles.text}
                onPress={this.gotoSignup}
                >Create Account</Text>
                <Text style={styles.text}>Forgot Password</Text>
            </View>
        );
    }
}
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 25,
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    text: {
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent'
    }
});
