import { StyleSheet, Text, View } from 'react-native';

export default function Matches () {
  return (
    <View style={styles.container}>
      <Text>Matches!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});