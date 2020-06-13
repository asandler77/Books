import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import Navigator from '../routes/homeStack';
import Books from '../src/Books';

export default function Homepage({navigation}) {
  return (
    <View>
      {/*<Button*/}
      {/*  title="Go to Books"*/}
      {/*  onPress={() => navigation.navigate('Books')}*/}
      {/*/>*/}
      <TouchableOpacity
          onPress={() => {
            navigation.navigate('Books');
          }}>
        <Text style={styles.content}>To the book list</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: '#ddd',
    margin: 16,
    padding: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

