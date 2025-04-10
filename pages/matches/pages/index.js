import { StyleSheet, Text, View } from 'react-native';
import { MatchChart } from '../ui/MatchChart';
import { useState } from 'react';
import { MatchCardList } from '../ui/MatchCardList';
import { myTheme } from '../../../app/theme';
import { ChipList } from '../../../shared/ui/ChipList';
import { MatchButtonBox } from '../ui/MatchButtonBox';

export default function Matches () {
  const [data, setData] = useState([
    {value: 30, color: myTheme.colors.none, text: '30%'},
    {value: 70, color: myTheme.colors.blue[300], text: '70%'},
  ])

  const [list, setList] = useState([
    {
      name: 'Win',
      text: '7/1/9',
      iconLabel: 'BR',
      id: 1,
      matchTime: 32,
      matchData: 20.9
    },
    {
      name: 'Win',
      text: '7/1/9',
      iconLabel: 'BR',
      id: 2,
      matchTime: 32,
      matchData: 20.9
    },
    {
      name: 'Loss',
      text: '7/1/9',
      iconLabel: 'BR',
      id: 3,
      matchTime: 32,
      matchData: 20.9
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
  ])

  const [chips, setChips] = useState([{name: 'Solo/Duo', active: true}, {name: 'Flex', active: false}, {name: 'ARAM', active: false}])

  const chipHandler = (chip) => {
    setChips(prev => {
      const newPrev = prev.map(el => {
        if (el.name === chip.name) {
          return {
            ...el,
            active: true,
          }
        }

        return {
          ...el,
          active: false,
        }
      })

      return newPrev
    })
  }

  return (
    <View style={styles.container}>
      <ChipList chips={chips} onPress={chipHandler} />
      <MatchChart data={data} />
      <MatchCardList list={list} />
      <MatchButtonBox />
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