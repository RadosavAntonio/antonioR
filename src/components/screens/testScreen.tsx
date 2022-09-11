import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/colors'
import { ScreenHeader } from './components/screen-header'
import { rawPokemon$ } from '../../store'

export const TestScreen = () => {
  useEffect(() => {
    rawPokemon$.subscribe(console.log)
    console.log('0000000', rawPokemon$.subscribe())
  }, [])
  return (
    <SafeAreaView>
      <ScreenHeader />
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.darkerGray,
//   },
// })
