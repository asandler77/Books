import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Books from './Books';
export default function Book(props) {
  const {book} = props;
  return (
    <View>
      <Text style={styles.container}>{book.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    margin: 10,
    padding: 5,
  },
})
