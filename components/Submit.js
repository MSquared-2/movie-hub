import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class Submit extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <TouchableOpacity>
                        <View style={styles.Touchable}>
                            <Text style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    < SocialIcon 
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                        raised={false}
                        width={DEVICE_WIDTH - 45}
                    />
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
});
