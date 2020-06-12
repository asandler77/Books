import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Book from './Book';

export default function Books(props) {
  const books = {props}
  return (
    <View>
      <Text>Books</Text>
      <FlatList
        data={props.books}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Book book={item} onPress={props.onItemPress} />
        )}
      />
    </View>
  );
}
