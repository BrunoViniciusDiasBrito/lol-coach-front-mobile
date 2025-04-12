import { Platform, View } from 'react-native'
import { Card } from '../../../widgets/Card'
import { StyleSheet } from 'react-native'
import { myTheme } from '../../../app/theme'

export const MatchCardList = ({list}) => {

  return (
    <View style={styles.container}>
      {list.map(item => {
        return (
          <Card.Container style={styles.card} key={item.id}>
            <Card.Image style={styles.image} size={40} iconLabel={item.iconLabel} />

            <Card.Content style={styles.scores}>
              <Card.Label style={styles.cardLabel} label={item.name} />
              <Card.CardText style={styles.cardText} text={item.text} />
            </Card.Content>

            <Card.Content style={styles.time}>
              <Card.Label style={styles.cardLabel} label={`${item.matchTime} min`} />
              <Card.CardText style={styles.cardText} text={item.matchData} />
            </Card.Content>
          </Card.Container>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
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
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    marginBottom: 6
  },
  image: {
    flexGrow: 0.5,
  },
  scores: {
    flexGrow: 5
  },
  time: {
    alignSelf: 'flex-end',
    flexGrow: 0.5,
    alignItems: 'flex-end'
  },
  cardLabel: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontSize.medium,
  },
  cardText: {
    color: myTheme.colors.white,
    opacity: 0.6
  }
})