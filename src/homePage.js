import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import Navigator from '../routes/homeStack';
import Books from '../src/Books';

export default function Homepage({navigation}) {
  const [books, setBooks] = useState([
    {title: 'Quiet Don', id: 1},
    {title: 'War and peace', id: 2},
    {title: 'Borodino', id: 3},
  ]);
  const [currentBookId, setCurrentBookId] = useState(0);

  const currentBooklId = () => {
    return books.find(book => book.id === currentBookId);
  };
  const setChoosedBookIdInCurrentBookId = bookId => {
    return setCurrentBookId(bookId);
  };

  if (currentBookId === 0) {
    return (
      <View>
        <Text>Home Page</Text>
        <Button
          title="Go to Books"
          onPress={() => navigation.navigate('Books')}
        />
      </View>
    );
  } else if (books.length > 0) {
    return (
        <Books books={books}
               onItemPress={setCurrentBookId}/>
    )
  }
}
