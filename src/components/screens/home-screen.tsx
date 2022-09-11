import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { colors } from '../../assets/colors'
import { ProText } from '../updatedTags/pro-text'
import { MainScreen } from './main-screen'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MainScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkerGray,
  },
})
