import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TextInput, View, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
import backgroundImage from '../../assets/images/47.jpg'
import styles from './styles'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Login = ({navigation}) => {
    return(
      <DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <ImageBackground source={backgroundImage} style={styles.containerBackground}>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input}
            placeholder = "Please enter your username"
            underlineColorAndroid = "transparent"
            autoCapitalize = "none"
            placeholderTextColor = "white"
            />
            <TextInput style={styles.input}
            placeholder = "Please enter your password"
            underColorAndroid = "transparent"
            autoCapitalize = "none"
            placeholderTextColor = "white"
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.button}>Click to Login</Text>
            </TouchableOpacity>
          </ImageBackground>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
}

export default Login
