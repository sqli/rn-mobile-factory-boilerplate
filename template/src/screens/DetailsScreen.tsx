import React from 'react';

import { Image, StyleSheet, View } from 'react-native';

const DetailsScreen = () => (
  <View testID="details-screen" style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: 'https://avatars.githubusercontent.com/u/835963?s=200&v=4',
      }}
    />
  </View>
);

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    transform: [{ scale: 2.5 }],
  },
});
