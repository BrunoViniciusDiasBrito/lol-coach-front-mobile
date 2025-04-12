import { StyleSheet, Text, View } from 'react-native'
import { Chart } from '../../../widgets/Chart'
import { myTheme } from '../../../app/theme'

export const MatchChart = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Winrate</Text>
      <Chart.Pie
        donut
        isThreeD
        textColor="black"
        radius={170}
        textSize={20}
        data={data}
        winrate={70}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontSize.xl
  }
})