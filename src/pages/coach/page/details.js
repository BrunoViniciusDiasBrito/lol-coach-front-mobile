import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { myTheme } from '../../../app/theme';
import { useLayoutEffect } from 'react';
import { DetaislMatchesList } from '../ui/detailsMatchesList';
import { DetailsStudentCard } from '../ui/detailsStudentCard';
import { InfoBLock } from '../../../shared/ui/infoBlock';
import { Spacer } from '../../../shared/ui/spacer';

export const Details = ({route, navigation}) => {
  const student = route.params
  const matches = [ // será buscado com id do student passado
    {
      champion: 'CO',
      matchResult: 'Win',
      kda: '3 / 6 / 7',
      time: '32',
      id: 1
    },
    {
      champion: 'CO',
      matchResult: 'Loss',
      kda: '6 / 6 / 7',
      time: '22',
      id: 2
    },
    {
      champion: 'CO',
      matchResult: 'Win',
      kda: '10 / 6 / 7',
      time: '12',
      id: 3
    },
  ]

  // A parte dos infoBlocos serão deito pela IA individualmente

  useLayoutEffect(() => {
    navigation.setOptions({title: 'Analise de ' + student.name})
  }, [navigation, student])

  return (
    <ScrollView style={styles.container}>
      <DetailsStudentCard student={student} />
      <DetaislMatchesList matches={matches} />
      <InfoBLock title="Insights" subtitle="Weak early game." content="Focus on farming more safely in the laning phase" />
      <InfoBLock title="AI Analysis" subtitle="Avoid pushing the wave" content="when your jungler is not near..." />
      <Spacer />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: myTheme.colors.background,
  }
});