import { ScrollView, StyleSheet } from 'react-native';
import { HomeCardList } from '../ui/HomeCardList';
import { myTheme } from '../../../app/theme';
import { HomeButtonBox } from '../ui/HomeButtonBox';
import { OrderBar } from '../../../widgets/OrderBar';
import { HomeChart } from '../ui/HomeChart';

export default function Home () {
  const list = [
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
  ]

  const cols = [
    {
      label: 'Win',
      status: 'inativo',
      tag: 'win'
    },
    {
      label: 'Losses',
      status: 'inativo',
      tag: 'loss'
    },
    {
      label: 'Time',
      status: 'inativo',
      tag: 'time'
    }
  ]

  const data = [ {value:50}, {value:60}, {value:70}, {value:80} ]

  return (
    <ScrollView style={styles.container}>
      <HomeChart data={data} />
      <OrderBar cols={cols} style={styles.orderButton} textColor={myTheme.colors.white} />
      <HomeCardList list={list} />
      <HomeButtonBox />
    </ScrollView>
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