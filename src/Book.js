import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Book(props) {
  const handlePress = () => {
    props.onPress(props.book.id);
  };
  const {book} = props.book;
  console.log(props.book.title)

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Text style={styles.container}>{props.book.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    margin: 10,
    padding: 5,
  },
});
