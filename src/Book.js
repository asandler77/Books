import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Book({route, navigation}) {
  return (
      <View>
        <Text style={styles.container}>{route.params.title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    margin: 10,
    padding: 5,
  },
});
