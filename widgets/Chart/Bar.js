import { StyleSheet, View } from 'react-native'
import { BarChart } from 'react-native-gifted-charts'
import { myTheme } from '../../app/theme'

export const Bar = ({data}) => {
  return (
    <View style={styles.container}>
       <BarChart
        barWidth={22}
        barBorderRadius={4}
        frontColor={myTheme.colors.blue[500]}
        yAxisThickness={0}
        xAxisThickness={0}
        yAxisTextStyle={{
          color: 'white'
        }}
        capColor='white'
        data={data}
        barStyle={{
          borderWidth: 1,
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 1,
          shadowRadius: 8,
        }}
        rulesType='solid'
        sideColor={myTheme.colors.blue[500]}
        rulesColor={myTheme.colors.none}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  }
});