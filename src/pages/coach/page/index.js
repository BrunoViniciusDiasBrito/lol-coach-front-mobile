import { StyleSheet, View } from 'react-native'
import { myTheme } from '../../../app/theme';
import { CoachButtonBox } from '../ui/coachButtonBox';
import { CoachCardList } from '../ui/coachCardList';
import { Recommendations } from '../../../shared/ui/Recommendation';

export const Coach = () => {
  const list = [
    {
      name: 'TeemoMain',
      iconLabel: 'Te',
      id: 1,
      elo: 'Diamond I'
    },
    {
      name: 'xXAkaliXx',
      iconLabel: 'xX',
      id: 2,
      elo: 'Diamond II'
    },
    {
      name: 'ADCorFeed',
      iconLabel: 'AD',
      id: 3,
      elo: 'Diamond III'
    },
  ]

  const item = {
    id: 1,
    iconLabel: 'CO',
    name: 'Corki',
    text: 'try Playing more with Corki',
  }

  return (
    <View style={styles.container}>
      <CoachButtonBox onPress={() => {}} />
        <CoachCardList list={list   } />
        <Recommendations item={item} title="Student Recommendation" />
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