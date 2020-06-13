import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Homepage from './src/homePage';
import Books from './src/Books';
import Book from './src/Book';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Book" component={Book} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#ddd',
  },
  content: {
    fontSize: 50,
  },
});
