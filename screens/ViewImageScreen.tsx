import * as React from 'react';
import { FlatList, StyleSheet, ListRenderItem, ImageBackground, Button } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Card } from '../components/Card';
import { useSelector } from 'react-redux'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ApplicationState } from '../state';
import { fetchRequest } from '../state/images/actions';
import { getImageSrc } from '../utils/images';
import { UnsplashItem } from '../state/images/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function ViewImageScreen(params: any) {
  const { item } = params.route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: getImageSrc(item) }}
        style={styles.image}>
        <View style={{backgroundColor: 'transparent', zIndex: 999}} onTouchStart={() => {params.navigation.goBack()}}>
          <Ionicons style={{marginRight: 10}} name='ios-close' color={'#ffffff'} size={42} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
});