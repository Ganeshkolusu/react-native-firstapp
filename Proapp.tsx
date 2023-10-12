import React from 'react';
import {Text, View, useColorScheme, StyleSheet} from 'react-native';

function Proapp(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'green',
  },
  darkText: {
    color: 'blue',
  },
});

export default Proapp;
