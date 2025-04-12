import { Pressable, StyleSheet, Text, View } from 'react-native'
import { myTheme } from '../../app/theme'

export const Chip = ({onPress, name, color, style}) => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, style]} onPress={onPress} android_ripple={{color: color ? color : styles.pressed}}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 150,
    minWidth: 120,
  },
  button: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: myTheme.colors.surface,
  },
  text: {
    fontSize: myTheme.fontSize.xl,
    color: myTheme.colors.white,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  pressed: {}
})