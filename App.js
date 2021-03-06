import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './components/stackNavigator'

export default class App extends React.Component {
  render() {
    return (
      <StackNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
