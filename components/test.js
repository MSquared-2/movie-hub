import React, { Component } from 'react';
import { View, Text,  Alert, Button, TextInput, TouchableOpacity } from 'react-native';
import Home from './Login';

export default class App extends Component {
  state = {
    username: '',
    password: '',
    auth_token: ''
  }

  render() {
  //If auth token is not present
   if (this.state.auth_token === '') {
     return (
     <View>
     <TextInput
           placeholder="Enter User name"
           onChangeText={TextInputValue =>
           this.setState({ username: TextInputValue })}
           underlineColorAndroid='transparent'
           style={{
               textAlign: 'center',
               width: '90%',
               marginBottom: 7,
               height: 40,
               borderRadius: 5 ,
               fontSize: 20,
           }}
     />
     <TextInput
           placeholder="Enter password"
           onChangeText={TextInputValue =>
           this.setState({ password: TextInputValue })}
           underlineColorAndroid='transparent'
           //secureTextEntry={true}
           style={{
               textAlign: 'center',
               width: '90%',
               marginBottom: 7,
               height: 40,
               borderRadius: 5 ,
               fontSize: 20,
           }}
     />
        <TouchableOpacity onPress={this.Signup.bind(this)}>
        <View 
            style={{ height: 50, 
                backgroundColor:
        'purple',
        justifyContent: 'center',
        alignItems: 'center', }}
        >
          <Text 
          style={{
          fontSize: 20,
          color: '#FFFFFF',
          }}
          >Signup</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.Login.bind(this)}>
        <View 
        style={{ height: 50, 
            backgroundColor:
        'purple',
        justifyContent: 'center',
        alignItems: 'center',
        }}
        >
          <Text 
          style={{
          fontSize: 20,
          color: '#FFFFFF',
          }}
          > 
          Login </Text>
        </View>
        </TouchableOpacity>
     </View>
        );
        
/* Checking if the auth token is not empty directly sending the user to Home screen */
         } else {
        return (
          <Home />
        );
    }
}
}
