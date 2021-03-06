import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Home = (props) => {
    return (
      <View style={styles.container}>
        <Text>The Best Home Page</Text>
        <Button title="Page 1" onPress={() => props.navigation.navigate('Page1')} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home

