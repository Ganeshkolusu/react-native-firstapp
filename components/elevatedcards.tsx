import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

export default function elevatedcards() {
  return (
    <View>
      <Text style={styles.headingtext}>Elevated cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  elevated: {
    backgroundColor: '#a3a0a9',
    elevation:4,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor: '#333',
    shadowOpacity:0.3,
    shadowRadius:2,
  },
});
