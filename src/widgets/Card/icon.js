import { View } from 'react-native'
import { Avatar } from 'react-native-paper'

export const Icon = ({style, size, icon, color}) => {
  return (
    <View style={style}>
      <Avatar.Icon size={size} icon={icon} color={color} theme={{colors: ''}} />
    </View>
  )
}