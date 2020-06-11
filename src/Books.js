import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Book from './Book';

export default function Books(props) {
  return (
    <View>
      <Text>Book list</Text>
      <FlatList
        data={props.books}
        renderItem={({item}) => <Book book={item} />}
      />
    </View>
  );
}
