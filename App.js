import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Books from './src/Books';

export default function App({navigation}) {
  const [books, setBooks] = useState([
    {title: 'Quiet Don', id: Date.now()},
    {title: 'War and peace', id: Date.now()},
    {title: 'Borodino', id: Date.now()},
  ]);

  return (
    <View style={styles.container}>

      <Text style={styles.content}>Books</Text>
      <Books books={books} />
      <FlatList
        data={books}
        renderItem={({item})=>(
            <Books
            onPress={() => navigation.navigate('Books', item)}
            title="Add button"
        >To All Books
        )}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#ddd',
  },
  content: {
    fontSize: 50,
  },
});
