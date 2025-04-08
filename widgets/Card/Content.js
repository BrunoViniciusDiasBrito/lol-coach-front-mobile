import { View } from 'react-native'

export const Content = ({style, children}) => {
  return (
    <View style={style}>
      {children}
    </View>
  )
}