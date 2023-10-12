import React from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';
import Flatcard from './components/flatcard';
import Elevatedcards from './components/elevatedcards';
import Trending from './components/trending';
import Actioncard from './components/actioncard';
import Contactlist from './components/contactlist';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Flatcard />
          <Elevatedcards />
          <Trending />
          <Actioncard />
          <Contactlist />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
