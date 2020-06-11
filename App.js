import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './src/pages/loginForm';
import Home from './src/pages/home'

const App = () => {
  return (
    <View>
      {/* <Login /> */}
      <Home/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
