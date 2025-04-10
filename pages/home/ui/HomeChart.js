import { StyleSheet, Text, View } from 'react-native'
import { Chart } from '../../../widgets/Chart'
import { myTheme } from '../../../app/theme'

export const HomeChart = ({data}) => {
  return (
    <View>
      <Text style={styles.title}>Farm por Minuto</Text>
      <Chart.Bar data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: myTheme.fontWeight.xl,
    color: myTheme.colors.white,
    marginBottom: 12
  }
})