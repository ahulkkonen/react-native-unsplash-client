export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Feed: undefined;
  Favorites: undefined;
};

export type FeedParamList = {
  FeedScreen: undefined;
};

export type FavoritesParamList = {
  FavoritesScreen: undefined;
};

export type UnsplashItem = {
  id: number;
  src: string;
  colors: Color[];
}

export type Color = {
  r: number,
  g: number,
  b: number
}

const asd: UnsplashItem = {
  id: 1,
  src: '',
  colors: [{r: 1, g: 2, b: 3}, {r: 1, g: 2, b: 3}]
}