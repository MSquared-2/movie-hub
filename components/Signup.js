import React, { Component } from 'react';
import { ImageBackground, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import background from '../images/background.jpg';
import logo from '../images/clapperboard.png';
import { Actions } from 'react-native-router-flux';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password_confirm: '',
            zip: '',
        };
    }

    gotoLogin = () => {
        Actions.login();
    }

    render() {
        return (
            <View style={styles.Container}>
                <ImageBackground 
                    source={background}
                    style={styles.backgroundImage}
                >
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.text}>Movie Hub</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <TextInput
                        placeholder="Enter Username"
                        placeholderTextColor='rgba(255,255,255,0.25)'
                        onChangeText={TextInputValue =>
                            this.setState({ email: TextInputValue })}
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Enter Password"
                        placeholderTextColor='rgba(255,255,255,0.25)'
                        onChangeText={TextInputValue =>
                            this.setState({ password: TextInputValue })}
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor='rgba(255,255,255,0.25)'
                        onChangeText={TextInputValue =>
                            this.setState({ password_confirm: TextInputValue })}
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                    />
                    <TextInput
                        placeholder="Enter Zip Code"
                        placeholderTextColor='rgba(255,255,255,0.25)'
                        onChangeText={TextInputValue =>
                            this.setState({ zip: TextInputValue })}
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                    />
                </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity>
                        <View style={styles.Touchable}>
                            <Text style={{ fontFamily: 'forma', fontSize: 25, color: 'rgba(255,255,255,0.7)', }}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                    < SocialIcon 
                        title='Register With Facebook'
                        button
                        type='facebook'
                        raised={false}
                        width={DEVICE_WIDTH - 45}
                    />
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text 
                        style={{ fontSize: 15,
                        color: 'white',
                        backgroundColor: 'transparent' }} 
                        onPress={this.gotoLogin}
                    > Already Have An Account? Sign In.
                    </Text>
                </View>
                </ImageBackground>
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = {
    Container: {
        flex: 1,
        justifyContent: 'center'
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    logo: {
        width: 120,
        height: 120
    },

    text: {
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'forma',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 30,
    },

    textInput: {
        textAlign: 'center',
        width: DEVICE_WIDTH - 45,
        marginBottom: 7,
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        marginHorizontal: 20,
        height: 40,
        borderRadius: 5,
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.35)',
        color: 'rgba(255,255,255,0.7)'
    },
    Touchable: {
        height: 45,
        width: DEVICE_WIDTH - 45,
        borderRadius: 25,
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#F035E0',
        justifyContent: 'center',
        alignItems: 'center',
    }

};
