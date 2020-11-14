import React from 'react';
import { Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../state/favorites/actions';
import { fetchRequest } from '../state/images/actions';

export function Card(props: {
    id: number,
    src: string,
}) {
    const dispatch = useDispatch();

    return (
        /*<Image source={{ uri: props.src }}
        style={{ width: 400, height: 400 }} />*/

        <Button title={"Press me"} onPress={() => {dispatch(fetchRequest())}}></Button>
    )
}
