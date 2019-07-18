import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';

import background from '../images/background.jpg';

import Signup from './SignupSection.js';
import Input from './Input.js';

export default class Login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        password: '',
        username: '',
    };
        //this.loginClick = this.loginClick.bind(this);
}
  /*  loginClick() {
        const { username, password } = this.state;
    }*/

    render() {
        return (
            <View style={styles.Container}>
                <ImageBackground 
                    source={background}
                    style={styles.backgroundImage}
                >
                    <Input />   
                    <Signup />
                </ImageBackground>
            </View>
        ); 
    }
}
//const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = {
    Container: {
        flex: 1,
        justifyContent: 'center'
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }

};
