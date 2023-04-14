import React from 'react';

import { Button, Image, StyleSheet, View } from 'react-native';

import navigationConstants from '@navigators/navigationConstants';
import { navigate } from '@navigators/navigationServices';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/835963?s=200&v=4',
        }}
      />
      <Button title="Go to Details" onPress={() => navigate(navigationConstants.DETAILS)} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
  },
});
