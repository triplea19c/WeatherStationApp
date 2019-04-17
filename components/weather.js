import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, View, ImageBackground, Dimensions,  TouchableWithoutFeedback, Keyboard } from 'react-native'
import backgroundImage from '../assets/images/47.jpg'
import FaSearch from "react-icons/fa"
import styles from './styles'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default class Weather extends React.Component{
  render(){
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <DismissKeyboard>
            <ImageBackground source={backgroundImage} style={styles.containerBackground}>
              <View style={styles.topViewContainer}>
                <Text style={styles.largeText}>San Francisco</Text>
                <Text style={styles.smallText}>Light Cloud</Text>
                <Text style={styles.largeText}>27°</Text>
                <TextInput style={styles.input}
                //<FaSearch/>
                placeholder = "Search any city"
                underColorAndroid = "transparent"
                autoCapitalize = "none"
                placeholderTextColor = 'white'/>
              </View>
            </ImageBackground>
          </DismissKeyboard>
        </KeyboardAvoidingView>
    );
  }
}
