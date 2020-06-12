import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Books from '../src/Books';
import Book from '../src/Book';
import Homepage from '../src/homePage';

const screens = {
  Homepage: {
    screen: Homepage,
  },
  Book: {
    screen: Book,
  },
  Books: {
    screen: Books,
  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
