import * as React from 'react'
import { StyleSheet, Animated } from 'react-native'
import { View } from '../components/Themed'
import { getImageSrc } from '../utils/images'
import { ImageQualityType, UnsplashItem } from '../state/images/types'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import ImageViewer from 'react-native-image-zoom-viewer'

export default function ViewImageScreen(params: any) {
    const { item } = params.route.params

    /*
  const scale = React.useRef(new Animated.Value(1)).current;
  const translationX = React.useRef(new Animated.Value(0)).current;
  const translationY = React.useRef(new Animated.Value(0)).current;

  const handlePinch = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: false });
  const handlePan = Animated.event([{ nativeEvent: { translationX, translationY } }], { listener: e => console.log(e.nativeEvent), useNativeDriver: false });
  */

    return (
        <View style={styles.container}>
            {/* Hide status bar */}
            <StatusBar hidden={true} />

            <View
                style={{
                    flex: 1,
                    width: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    zIndex: 999,
                }}
                onTouchStart={() => {
                    params.navigation.goBack()
                }}
            >
                <Ionicons
                    style={{ marginTop: 10, marginRight: 20 }}
                    name="ios-close"
                    color={'#ffffff'}
                    size={42}
                />
            </View>

            <ImageViewer
                imageUrls={[
                    { url: getImageSrc(item, ImageQualityType.HIGH_QUALITY) },
                ]}
                useNativeDriver={true}
                renderIndicator={() => {
                    return <View></View>
                }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        position: 'relative',
    },
    image: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
})
