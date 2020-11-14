import * as React from 'react';
import { FlatList, StyleSheet, ListRenderItem } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Card } from '../components/Card';
import { useSelector } from 'react-redux'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ApplicationState } from '../state';
import { fetchRequest } from '../state/images/actions';
import { getImageSrc } from '../utils/images';
import { UnsplashItem } from '../state/images/types';

export default function FavoitesScreen(params: any) {
  const favorites = useSelector((state: ApplicationState) => state.favorites.data);

  const renderItem = ({ item }: { item: UnsplashItem }) => (
    <Card key={item.id} item={item} favorite={true} navigation={params.navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(image: UnsplashItem) => image.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
});