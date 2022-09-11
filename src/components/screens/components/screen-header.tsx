import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native'
import { colors } from '../../../assets/colors'
import { getAdjustedWidth } from '../../../helperFunctions/adaptive-width-and-height'
import { createShadow } from '../../../helperFunctions/create-shadow'
import { ProText } from '../../updatedTags/pro-text'
import { Row } from '../../updatedTags/row'

export const ScreenHeader = () => {
  const shadow = createShadow({
    width: 0.5,
    height: 2,
    opacity: 1,
    radius: 2,
    color: 'gold',
    elevation: 1,
  })

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Row style={styles.contentContainer}>
        <View style={[styles.nameContainer]}>
          <ProText
            color="gold"
            fontSize={14}
            fontWeight={'bold'}
            additionalStyle={shadow}
          >
            Antonio Radosav
          </ProText>
          <ProText color="white">software engineer</ProText>
        </View>
        <TouchableHighlight onPress={() => navigation.navigate('Test')}>
          <ProText color="white">test</ProText>
        </TouchableHighlight>
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkerGray,
    height: 40,
    width: '100%',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: getAdjustedWidth(30),
  },

  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
