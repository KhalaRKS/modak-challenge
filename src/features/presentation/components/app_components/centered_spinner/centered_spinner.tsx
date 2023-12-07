import { Spinner } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import { styles } from './centered_spinner_style'

export const CenteredSpinner = () => {
  return (
    <View style={styles.center}>
        <Spinner size='large'/>
    </View>
  )
}
