import { View } from 'react-native'
import { GenericButton } from '../../../shared/ui/Button'

export const CoachButtonBox = ({onPress}) => {
  return (
    <View>
      <GenericButton name='Add Student' onPress={onPress} />
    </View>
  )
}