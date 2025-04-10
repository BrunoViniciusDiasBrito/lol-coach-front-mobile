import { Pressable, StyleSheet, Text } from 'react-native'
// import { Button} from 'react-native-paper'
import { myTheme } from '../../app/theme'

export const GenericButton = ({name, color, style, stylePressed, onPress}) => {
  return (
    <Pressable
      style={ ({pressed}) => [pressed ? stylePressed : null, btnStyle.base, style]}
      onPress={onPress}
      android_ripple={{color: color * 2.5}}
    >
      <Text style={[btnStyle.text, color ? {color: color} : null]}>
        {name}
      </Text>
    </Pressable>
  )
}

const btnStyle = StyleSheet.create({
  base: {
    backgroundColor: myTheme.colors.blue[700],
    paddingVertical: 18,
    borderRadius: 8,
  },
  text: {
    fontSize: myTheme.fontWeight.xl,
    textTransform: 'uppercase',
    color: myTheme.colors.white,
    textAlign: 'center'
  },
})