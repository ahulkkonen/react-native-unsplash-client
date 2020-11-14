import * as React from 'react'
import { FlatList, StyleSheet, ListRenderItem, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { Card } from '../components/Card'
import { useSelector } from 'react-redux'

import { View } from '../components/Themed'
import { ApplicationState } from '../state'
import { fetchRequest } from '../state/images/actions'
import { UnsplashItem } from '../state/images/types'
import { Zocial } from '@expo/vector-icons'

export default function FeedScreen(params: any) {
    const dispatch = useDispatch()

    const fetchImages = () => {
        dispatch(fetchRequest())
    }

    const images = useSelector((state: ApplicationState) => state.images.data)

    // initial fetch
    if (images.length === 0) fetchImages()

    const renderItem = ({ item }: { item: UnsplashItem }) => (
        <Card
            key={item.id}
            item={item}
            favorite={false}
            navigation={params.navigation}
        />
    )

    return (
        <View style={styles.container}>
            <View style={styles.cards}>
                <FlatList
                    data={images}
                    renderItem={renderItem}
                    keyExtractor={(image: UnsplashItem) => image.id}
                    onEndReachedThreshold={0.2}
                    onEndReached={() => {
                        fetchImages()
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
    },
    cards: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
