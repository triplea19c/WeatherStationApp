import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, View, ImageBackground, Dimensions,  TouchableWithoutFeedback, Keyboard } from 'react-native'
import backgroundImage from '../../assets/images/47.jpg'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import App from './index'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Weather = ({ weather, temperature }) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <DismissKeyboard>
            <ImageBackground source={backgroundImage} style={styles.containerBackground}>
              <View style={styles.topViewContainer}>
                <Text style={styles.largeText}>San Francisco</Text>
                <Text style={styles.smallText}>Light Cloud</Text>
                <Text style={styles.largeText}>27°</Text>
                <TextInput style={styles.input}
                  placeholder = "       Search any city..."
                  underColorAndroid = "transparent"
                  autoCapitalize = "none"
                  placeholderTextColor = 'white'
                  />
                <Icon style={styles.inputIcon} name={"ios-globe"} size={28} color={'white'} />
              </View>
            </ImageBackground>
          </DismissKeyboard>
        </KeyboardAvoidingView>
    );
  };

export default Weather
