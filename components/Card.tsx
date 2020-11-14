import React from 'react';
import { Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
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

    return (
        <View style={styles.container}>
            <Image source={{ uri: props.src }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        width: '90%',
        height: '160px',
        marginBottom: 20,
        backgroundColor: 'grey',
        borderWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',

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
