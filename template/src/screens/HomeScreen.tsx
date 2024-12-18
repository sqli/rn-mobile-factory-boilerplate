import React from 'react';

import { Button, Image, StyleSheet, View } from 'react-native';

import { t } from 'i18next';

import { NavigationEnum } from '@enums/NavigationEnum';
import { navigate } from '@services/navigationServices';

const HomeScreen = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: 'https://avatars.githubusercontent.com/u/835963?s=200&v=4',
      }}
    />
    <Button title={t('home.detailsButton')} onPress={() => navigate(NavigationEnum.DETAILS)} />
  </View>
);

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
