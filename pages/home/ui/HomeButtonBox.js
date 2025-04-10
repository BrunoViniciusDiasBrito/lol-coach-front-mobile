import { StyleSheet, View } from 'react-native'
import { GenericButton } from '../../../shared/ui/Button'

export const HomeButtonBox = () => {
  return (
    <View style={styles.container}>
      <GenericButton style={styles.button} stylePressed={styles.pressed} name={'Ai suggestions'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginBottom: 26
  },
  button: {},
  pressed: {
    opacity: 0.8
  }
})