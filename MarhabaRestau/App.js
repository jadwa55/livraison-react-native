// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HERMOZ!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
  },
});
