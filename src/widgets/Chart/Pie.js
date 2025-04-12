import { StyleSheet, Text, View } from 'react-native'
import { PieChart } from 'react-native-gifted-charts'
import { myTheme } from '../../app/theme'

export const Pie = ({data, winrate}) => {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        donut
        innerRadius={80}
        centerLabelComponent={() => {
          return <Text style={styles.winrateText}>{winrate}%</Text>
        }}
        backgroundColor={myTheme.colors.background}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12
  },
  winrateText: {
    fontSize: myTheme.fontSize.xxl * 1.5,
    color: myTheme.colors.white
  }
})