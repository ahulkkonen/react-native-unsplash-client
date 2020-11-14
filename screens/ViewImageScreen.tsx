import * as React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { View } from '../components/Themed';
import { getImageSrc } from '../utils/images';
import { ImageQualityType, UnsplashItem } from '../state/images/types';
import { Ionicons } from '@expo/vector-icons';
import { PinchGestureHandler, PanGestureHandler } from "react-native-gesture-handler"

export default function ViewImageScreen(params: any) {
  const { item } = params.route.params;

  const scale = React.useRef(new Animated.Value(1)).current;
  const translationX = React.useRef(new Animated.Value(0)).current;
  const translationY = React.useRef(new Animated.Value(0)).current;

  const handlePinch = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: false });
  const handlePan = Animated.event([{ nativeEvent: { translationX, translationY } }], { listener: e => console.log(e.nativeEvent), useNativeDriver: false });

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'transparent', zIndex: 999 }} onTouchStart={() => { params.navigation.goBack() }}>
        <Ionicons style={{ marginRight: 10 }} name='ios-close' color={'#ffffff'} size={42} />
      </View>

          <Animated.Image
            source={{ uri: getImageSrc(item, ImageQualityType.HIGH_QUALITY) }}
            style={[styles.image, { transform: [{ scale }, {translateX: translationX}, {translateY: translationY }]}]}
            resizeMode={'contain'}
          >
          </Animated.Image>
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