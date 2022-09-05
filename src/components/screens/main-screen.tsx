import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProText} from '../updatedTags/pro-text';
import {ScreenHeader} from '../screens/components/screen-header';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader />
      <ProText color="white">antonioR</ProText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
