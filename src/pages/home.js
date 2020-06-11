import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Jumbotron from '../components/jumbotron';
import Data from '../components/showArticles';

const Home = () => {
  return (
    <View>
      <View>
        <Jumbotron />
      </View>
      <View style={{marginTop: 20}}>
        <ScrollView>
          <Data />
          <Data />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
