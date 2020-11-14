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
            {/*<Image key={props.key} source={{ uri: props.src }} style={{ width: window.screen.width, height: 100 }} />*/}
            <Text style={styles.title}>{props.id}</Text>
        </View>
        /*<Button title={"Press me"} onPress={() => {dispatch(fetchRequest())}}></Button>*/
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: 100,
        padding: 20,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 1,
        fontWeight: 'bold',
        color: 'white',
    },
})
