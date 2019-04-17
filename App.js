import React from 'react'
import Weather from './components/weather'
import Login from './components/login'
import { createStackNavigator, createAppContainer } from 'react-navigation'

class App extends React.Component {
  render(){
    return(
      <Login/>
    );
  }
}

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
