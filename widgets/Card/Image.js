import { View } from 'react-native'
import { Avatar } from 'react-native-paper'

export const Image = ({style, size, iconLabel}) => {
  return (
    <View style={style}>
      <Avatar.Text size={size} label={iconLabel} />
    </View>
  )
}