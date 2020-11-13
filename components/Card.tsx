import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export function Card(props: {
    id: number,
    src: string,
}) {
    return (
        <Image source={{ uri: props.src }}
            style={{ width: 400, height: 400 }} />
    )
}
