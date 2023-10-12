import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function actioncard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.heading}>Blog card</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>Nature of earth</Text>
        </View>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D5603AQGK-CKbjfNhVQ/profile-displayphoto-shrink_800_800/0/1674150842136?e=2147483647&v=beta&t=aEPynyMIiFmatPaTWhFjuoFV_moeFjtrffzIaOPJbQk',
          }}
          style={styles.image}
        />
        <View style={styles.body}>
          <Text numberOfLines={3}>
            Earth has evolved through geological and biological processes that
            have left traces of the original conditions. The outer surface is
            divided into several gradually migrating tectonic plates. The
            interior remains active, with a thick layer of plastic mantle and an
            iron-filled core that generates a magnetic field
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://en.wikipedia.org/wiki/Nature#:~:text=Earth%20has%20evolved%20through%20geological,that%20generates%20a%20magnetic%20field.',
              )
            }>
            <Text style={styles.link}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://en.wikipedia.org/wiki/Nature#:~:text=Earth%20has%20evolved%20through%20geological,that%20generates%20a%20magnetic%20field.',
              )
            }>
            <Text style={styles.link}>Know more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 'auto',
    height: 450,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 16,
  },
  elevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  headingcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a3a0a9',
  },
  headingtext: {
    fontSize: 22,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: '#000000',
  },
  image: {
    height: 300,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  body: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
    marginTop: 4,
    flexShrink: 1,
  },
  footer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  link: {
    fontSize: 16,
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
});
