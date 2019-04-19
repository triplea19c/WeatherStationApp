import React from 'react'
import Weather from './components/index/weather'
import Login from './components/index/login'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const Navigation = createStackNavigator({
    Default: Login,
    Main: Weather,
  },{
  defaultNavigationOptions: {
    header: null
    }
  }
);

export default createAppContainer(Navigation)
