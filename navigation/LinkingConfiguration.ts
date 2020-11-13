import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Feed: {
            screens: {
              FeedScreen: 'one',
            },
          },
          Favorites: {
            screens: {
              FavoritesScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
