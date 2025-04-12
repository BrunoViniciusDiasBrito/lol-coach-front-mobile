import { Text } from 'react-native-paper'
import { View } from 'react-native'

export const CardText = ({text, style}) => {
  return (
    <View>
      <Text style={style}>{text}</Text>
    </View>
  )
}