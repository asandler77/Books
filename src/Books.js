import React, {useState} from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';
import Book from './Book';

export default function Books({navigation}) {
  const [books, setBooks] = useState([
    {title: 'The Quiet Don', id: 1},
    {title: 'The War and peace', id: 2},
    {title: 'Borodino', id: 3},
  ]);
  const [currentBookId, setCurrentBookId] = useState(null);

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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Book', item);
            }}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
