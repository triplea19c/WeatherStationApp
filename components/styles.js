import {StyleSheet, Dimensions,} from 'react-native'

const {HEIGHT, WIDTH} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerBackground: {
    width: null,
    height: null,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 50,
    color: 'white'
  },
  input: {
    color: 'white',
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 2,
    fontSize: 10,
    width: WIDTH - 300
  },
  button: {
    color: 'black',
    backgroundColor: 'white',
    margin: 10
  },
  largeText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10
  },
  smallText: {
    color: 'white',
    textAlign: 'center'
  },
})

export default styles
