import React, {useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, StyleSheet} from 'react-native';
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
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Book', item);
            }}>
            <Text style={styles.content}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: '#ddd',
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
  },
})
