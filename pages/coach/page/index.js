import { StyleSheet, View } from 'react-native'
import { myTheme } from '../../../app/theme';
import { CoachButtonBox } from '../ui/coachButtonBox';

export const Coach = () => {
  return (
    <View style={styles.container}>
      <CoachButtonBox onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: myTheme.colors.background,
  },
  orderButton: {
    backgroundColor: myTheme.colors.none,
    padding: 6,
  }
});