import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Book from './Book';

export default function Books() {
  const [books, setBooks] = useState([
    {title: 'The Quiet Don', id: 1},
    {title: 'The War and peace', id: 2},
    {title: 'Borodino', id: 3},
  ]);
  const [currentBookId, setCurrentBookId] = useState(0);

  const currentBooklId = () => {
    return books.find(book => book.id === currentBookId);
  };
  const setChoosedBookIdInCurrentBookId = bookId => {
    return setCurrentBookId(bookId);
  };

  return (
    <View>
      <Text>Books</Text>
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Book book={item} onPress={setChoosedBookIdInCurrentBookId} />
        )}
      />
    </View>
  );
}
