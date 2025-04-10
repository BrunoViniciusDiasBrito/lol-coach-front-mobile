import { Platform, StyleSheet, Text, View } from 'react-native'
import { Card } from '../../../widgets/Card'
import { myTheme } from '../../../app/theme'

export const ChampionsRecommendations = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Recommendations</Text>
      <Card.Container style={styles.card} key={item.id}>
        <Card.Image style={styles.image} size={40} iconLabel={item.iconLabel} />

        <Card.Content style={styles.textContainer}>
          <Card.Label style={styles.cardLabel} label={item.name} />
          <Card.CardText style={styles.cardText} text={item.text} />
        </Card.Content>
      </Card.Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontWeight.xl,
    paddingVertical: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: myTheme.colors.surface,
    borderColor: myTheme.colors.gray.border,
    borderWidth: 1,
    padding: 16,
    width: '100%',
    borderRadius: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowradius: 2,
  },
  image: {
    flexGrow: 0.5,
  },
  textContainer: {
    flexGrow: 5,
    width: '90%',
    paddingHorizontal: 8
  },
  time: {
    alignSelf: 'flex-end',
    flexGrow: 0.5,
    alignItems: 'flex-end'
  },
  cardLabel: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontWeight.medium,
  },
  cardText: {
    color: myTheme.colors.white,
    opacity: 0.6
  }
})