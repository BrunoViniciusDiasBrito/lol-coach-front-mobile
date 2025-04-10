import { StyleSheet, View } from 'react-native'
import { GenericButton } from '../../../shared/ui/Button'
import { myTheme } from '../../../app/theme'

export const MatchButtonBox = () => {
  return (
    <View style={styles.container}>
      <GenericButton
        style={styles.button}
        stylePressed={styles.pressed}
        name={'See Details'}
        color={myTheme.colors.blue[300]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginBottom: 26
  },
  button: {
    backgroundColor: myTheme.colors.none,
  },
  pressed: {
    opacity: 0.8
  }
})