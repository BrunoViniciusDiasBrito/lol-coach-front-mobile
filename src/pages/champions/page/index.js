import { StyleSheet, View } from 'react-native'
import { ChampionsList } from '../ui/championsList';
import { myTheme } from '../../../app/theme';
import { Recommendations } from '../../../shared/ui/Recommendation';

export const Champions = () => {
  const list = [
    {
      name: 'Trash',
      text: 'Win 8.1',
      iconLabel: 'TR',
      id: 1,
      matchTime: 50,
      matchData: 2.0
    },
    {
      name: 'Corki',
      text: 'Win 4.1',
      iconLabel: 'CO',
      id: 2,
      matchTime: 60,
      matchData: 4.1
    },
    {
      name: 'Aurelion',
      text: 'KD5.5.7',
      iconLabel: 'AU',
      id: 3,
      matchTime: 48,
      matchData: 3.7
    },
    // {
    //   name: 'Win',
    //   text: '7/1/9',
    //   iconLabel: 'BR',
    //   id: 4,
    //   matchTime: 32,
    //   matchData: 20.9
    // },
    // {
    //   name: 'Loss',
    //   text: '7/1/9',
    //   iconLabel: 'BR',
    //   id: 5,
    //   matchTime: 32,
    //   matchData: 20.9
    // },
    // {
    //   name: 'Win',
    //   text: '7/1/9',
    //   iconLabel: 'BR',
    //   id: 6,
    //   matchTime: 32,
    //   matchData: 20.9
    // },
    // {
    //   name: 'Win',
    //   text: '7/1/9',
    //   iconLabel: 'BR',
    //   id: 7,
    //   matchTime: 32,
    //   matchData: 20.9
    // },
    // {
    //   name: 'Loss',
    //   text: '7/1/9',
    //   iconLabel: 'BR',
    //   id: 8,
    //   matchTime: 32,
    //   matchData: 20.9
    // },
    // {
    //   name: 'Loss',
    //   text: '7/1/9',
    //   iconLabel: 'BR',
    //   id: 9,
    //   matchTime: 32,
    //   matchData: 20.9
    // },
    // {
    //   name: 'Win',
    //   text: '7/1/9',
    //   iconLabel: 'BR',
    //   id: 10,
    //   matchTime: 32,
    //   matchData: 20.9
    // },
  ]

  const item = {
    id: 1,
    iconLabel: 'CO',
    name: 'Corki',
    text: 'try Playing more with Corki',
  }

  return (
    <View style={styles.container}>
      <ChampionsList list={list} />
      <Recommendations item={item} title="AI Recommendations" />
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
});