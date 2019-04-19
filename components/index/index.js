import React from 'react'
import Weather from './weather'
import Login from './login'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import styles from './styles'
import { API_KEY } from '../../utils/weatherOther';

export default class App extends React.Component {
  state = {
    isLoading: true,
    City: '',
    error: null
  };

  async componentDidMount() {
    try {
      const ajaxURL = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=${API_KEY}', {method: 'GET'})
      const ajaxURLResponse = await ajaxURL.json()
      this.setState({quotes:ajaxURLResponse.data, isLoading: false})
    } catch (err) {
      console.log("Error fetching weather data", err)
    }
  }

  render() {
    const { isLoading } = this.state;
    if(!isLoading) {
    return (
        <View style={styles.container}>
          <Login/>
        </View>
      )
    }else {
      return <View><ActivityIndicator/></View>
    }
  }
}
