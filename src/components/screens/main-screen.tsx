import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { ProText } from '../updatedTags/pro-text'
import { ScreenHeader } from '../screens/components/screen-header'
import Pula from '../../pokemon.json'

export const MainScreen = () => {
  console.log('-----', Pula)

  return (
    <View style={styles.container}>
      <ScreenHeader />
      <ProText color="red">antonioR</ProText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
