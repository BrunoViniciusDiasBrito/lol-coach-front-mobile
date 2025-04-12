import { StyleSheet, View } from 'react-native'
import { Chip } from './Chip'
import { myTheme } from '../../app/theme'

export const ChipList = ({chips, onPress}) => {
  return (
    <View style={styles.container}>
      {chips.map(chip => {
        return <Chip key={chip.name} name={chip.name} style={chip.active ? styles.active: null} onPress={() => onPress(chip)} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8
  },
  active: {
    backgroundColor: myTheme.colors.blue[300]
  }
})