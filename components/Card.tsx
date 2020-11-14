import React from 'react';
import { ActivityIndicator, Button, Image, ImageBackground, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../state/favorites/actions';
import { fetchRequest } from '../state/images/actions';
import { Text, View } from '../components/Themed';

export function Card(props: {
    key: string,
    id: string,
    src: string,
}) {
    //const dispatch = useDispatch();

    let [loading, setLoading] = React.useState(true);
    const imageOpacity = new Animated.Value(0);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" animating={loading}/>}

            <Animated.View style={
                {
                    width: '100%',
                    height: '100%',
                    opacity: 1,
                    maxHeight: loading ?  0 : '100%'
                }
            }>
                <Image
                    source={{ uri: props.src }} 
                    style={styles.image}
                
                    onLoadEnd={() => {
                        setLoading(false);

                        Animated.timing(imageOpacity, {
                            toValue: 1,
                            duration: 500,
                            useNativeDriver: true,
                        }).start();
                    }}
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        width: '90%',
        minHeight: 160,
        marginBottom: 20,
        backgroundColor: 'lightgray',
        borderWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    title: {
        fontSize: 1,
        fontWeight: 'bold',
        color: 'white',
    },
})
