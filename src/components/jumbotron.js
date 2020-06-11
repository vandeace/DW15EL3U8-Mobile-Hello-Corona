import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import jumbotronPic from '../assets/image/Jumbotron.png';
import ConsultButton from '../assets/image/ConsultButton.png';

const Jumbotron = () => {
  return (
    <View style={styles.jumbotronArea}>
      <Image source={jumbotronPic} style={styles.jumbotron} />
      <TouchableOpacity
        style={styles.buttonPos}
        onPress={() => alert('Redirects to Consultation Form')}>
        <Image source={ConsultButton} style={styles.button} />
      </TouchableOpacity>
    </View>
  );
};

export default Jumbotron;

const styles = StyleSheet.create({
  jumbotronArea: {
    height: 110,
    backgroundColor: '#FF6185',
  },
  jumbotron: {
    width: '100%',
    height: 100,
  },
  buttonPos: {
    position: 'relative',
    top: -35,
    left: 20,
  },
  button: {
    height: 27,
    aspectRatio: 5.0,
  },
});
