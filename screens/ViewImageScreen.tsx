import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { View } from '../components/Themed';
import { getImageSrc } from '../utils/images';
import { ImageQualityType, UnsplashItem } from '../state/images/types';
import { Ionicons } from '@expo/vector-icons';

export default function ViewImageScreen(params: any) {
  const { item } = params.route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: getImageSrc(item, ImageQualityType.HIGH_QUALITY)}}
        style={styles.image}
        resizeMode={'contain'}>
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
    flexDirection: 'column'
  },
});