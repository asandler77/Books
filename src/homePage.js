import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import Navigator from '../routes/homeStack';
import Books from '../src/Books';

export default function Homepage({navigation}) {


  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Go to Books"
        onPress={() => navigation.navigate('Books')}
      />
    </View>
  );
}
