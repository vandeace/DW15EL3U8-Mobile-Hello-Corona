import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';

const showArticles = () => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <View style={{width: '90%'}}>
          <Card>
            <View style={{alignItems: 'center'}}>
              <CardItem>
                <Image source={require('../assets/thumbnails/1.png')} />
              </CardItem>
              <Text>Ini adalah Judul Artikel</Text>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default showArticles;

const styles = StyleSheet.create({});
