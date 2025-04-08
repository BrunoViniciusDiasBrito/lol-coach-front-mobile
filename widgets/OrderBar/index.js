import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useOrderBar } from './use-order-bar'
import { myTheme } from '../../app/theme'

export const OrderBar = ({cols, textColor, style, onPress}) => {
  const {
    orderHandler,
    colsSorted
  } = useOrderBar(cols)

  return (
    <View style={styles.container}>
      {colsSorted.map(col => {
        return (
          <Pressable style={[style]} title={col.label} onPress={() => orderHandler(col)} key={col.label}>
            <Text style={[styles.textButton , {color: textColor}, col.status === 'ativo' ? styles.active : null]}>{col.label}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  textButton: {
    textTransform: 'uppercase'
  },
  active: {
    color: myTheme.colors.blue[300],
  }
})