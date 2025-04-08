import { View } from 'react-native'

export const Container = ({children, style}) => {
  return (
    <View style={style}>
      {children}
    </View>
  )
}