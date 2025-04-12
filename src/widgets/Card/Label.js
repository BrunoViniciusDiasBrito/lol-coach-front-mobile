import { View, Text } from 'react-native'

export const Label = ({label, style}) => {
  return (
    <View>
      <Text style={style}>{label}</Text>
    </View>
  )
}