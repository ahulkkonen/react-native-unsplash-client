import * as React from 'react';
import { StyleSheet } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Card } from '../components/Card';
import { useSelector } from 'react-redux'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ApplicationState } from '../state';
import { fetchRequest } from '../state/images/actions';
import { getImageSrc } from '../utils/images';

export default function FeedScreen() {
  const dispatch = useDispatch();

  const fetchImages = () => {
    dispatch(fetchRequest());
  }

  const images = useSelector((state: ApplicationState) => state.images.data);

  // initial fetch
  if (images.length === 0) fetchImages();

  {console.log(images)}

  return (
    
    <View style={styles.container}>
      {/* print images */}
      {images.map(image => {
        console.log(image.id);

        return(
          <Card key={image.id} src={getImageSrc(image)} id={image.id} />
        )
      })}

      <Text style={styles.title}>{}</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/FeedScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

/*const mapStateToProps = ({ images }: ApplicationState) => ({
  loading: images.loading,
  errors: images.errors,
  data: images.data
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
  fetchRequest
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedScreen)*/