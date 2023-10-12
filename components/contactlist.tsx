import React from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'ganeshswamy',
      status: 'full stack developer',
      imageurl:
        'https://img.freepik.com/premium-photo/shree-krishna-radha-illustration-generative-ai_834602-2711.jpg?size=626&ext=jpg&ga=GA1.1.362985589.1696573735&semt=sph',
    },
    {
      uid: 2,
      name: 'balaram',
      status: 'full stack developer',
      imageurl:
        'https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.362985589.1696573735&semt=sph',
    },
    {
      uid: 3,
      name: 'anjaneyulu',
      status: 'admin office',
      imageurl:
        'https://img.freepik.com/premium-photo/god-hanuman-meditation-images-generative-ai_849906-3218.jpg?size=626&ext=jpg&ga=GA1.1.362985589.1696573735&semt=sph',
    },
    {
      uid: 4,
      name: 'srinu',
      status: 'mern stack developer',
      imageurl:
        'https://img.freepik.com/premium-photo/beautiful-image-lord-krishna-black-background-generative-ai_849906-1630.jpg?size=626&ext=jpg&ga=GA1.1.362985589.1696573735&semt=sph',
    },
    {
      uid: 5,
      name: 'vijay',
      status: 'backend developer',
      imageurl:
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.362985589.1696573735&semt=sph',
    },
  ];
  return (
    <View>
      <Text style={styles.headingtext}>Contact List</Text>
      <ScrollView>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.card}>
            <Image
              source={{
                uri: contact.imageurl,
              }}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.status}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    height:150,
    width:'auto',
    backgroundColor: '#fff',
    margin:8,
    padding: 10,
    borderRadius: 5,
    elevation: 6,
    shadowOffset:{
        height:1,
        width:1,
    },
    shadowColor:'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text:{
    flex:1,
    flexDirection:'column',
    padding:40
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  status: {
    fontSize: 16,
    color: 'gray',
  },
});
