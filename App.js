import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Books from './src/Books';

export default function App({navigation}) {
  const [books, setBooks] = useState([
    {title: 'Quiet Don', id: 1},
    {title: 'War and peace', id: 2},
    {title: 'Borodino', id: 3},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Books</Text>
      <Books books={books} />
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
