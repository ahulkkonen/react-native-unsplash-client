import React from 'react';
import { ActivityIndicator, Button, Image, ImageBackground, StyleSheet, TouchableOpacity, Animated, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../state/favorites/actions';
import { fetchRequest } from '../state/images/actions';
import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

export function Card(props: {
    key: string,
    id: string,
    src: string,
}) {
    //const dispatch = useDispatch();

    let [loading, setLoading] = React.useState(true);
    const imageOpacity = new Animated.Value(0);

    const handleHeartPressed = (event: GestureResponderEvent) => {
        setHeartPressed(!heartPressed);
    }

    const [heartPressed, setHeartPressed] = React.useState(false);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" animating={loading} />}

            <Animated.View style={
                {
                    width: '100%',
                    height: '100%',
                    maxHeight: loading ? 0 : '100%',
                }
            }>
                <ImageBackground
                    source={{ uri: props.src }}
                    style={styles.image}

                    onLoadEnd={() => {
                        setLoading(false);
                    }}
                >
                    <TouchableOpacity style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 20, marginBottom: 20}} onPress={handleHeartPressed}>
                        <Ionicons style={{}} name={(heartPressed) ? 'ios-heart' : 'ios-heart-empty'} color={'#ff0000'} size={38} />
                    </TouchableOpacity>
                </ImageBackground>
            </Animated.View>


            {/*<View style={
                {
                    width: '100%',
                    height: 32,
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }
            }>


                {/*<Button 
                    onPress={() => { alert('lol') }}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginLeft: 20,
        marginRight: 20,
        width: '90%',
        minHeight: 220,
        marginBottom: 20,
        backgroundColor: 'lightgray',
        borderWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: -1,
    },

    title: {
        fontSize: 1,
        fontWeight: 'bold',
        color: 'white',
    },
})
