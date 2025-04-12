import { Platform, StyleSheet, Text, View } from 'react-native';
import { myTheme } from '../../../app/theme';
import { Card } from '../../../widgets/Card';

export const DetaislMatchesList = ({matches}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Recent Games</Text>
      {matches.map(item => {
        return (
          <Card.Container style={styles.card} key={item.id}>
            <Card.Image style={styles.image} size={40} iconLabel={item.champion} />

            <Card.Content style={styles.name}>
              <Card.Label style={item.matchResult.toLowerCase() === 'win' ? styles.winText: styles.loseText} label={item.matchResult} />
              <Card.Label style={styles.cardLabel} label={item.kda} />
            </Card.Content>

            <Card.Content style={styles.kda}>
                <Card.CardText style={styles.cardText} text={item.kda} />
            </Card.Content>

            <Card.Content style={styles.time}>
              <Card.Label style={styles.cardLabel} label={`${item.time} min`} />
              <Card.CardText style={styles.cardText} text={`${item.time} min`} />
            </Card.Content>
          </Card.Container>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: myTheme.colors.white,
    marginBottom: 12,
    fontSize: myTheme.fontSize.xl
  },
  text: {
    color: myTheme.colors.white
  },
  cardContainer: {
    gap: 8
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
    shadowRadius: 2,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    alignItems: 'center'
  },
  cardLabel: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontSize.medium,
  },
  cardText: {
    color: myTheme.colors.white,
    opacity: 0.6,
    fontSize: 16
  },
  image: {
    flexGrow: 0.5,
  },
  name: {
    flexGrow: 3
  },
  kda: {
    flexGrow: 3,
    alignSelf: 'flex-end',
    fontSize: myTheme.fontSize.medium
  },
  time: {
    alignSelf: 'flex-end',
    flexGrow: 0.5,
    alignItems: 'flex-end'
  },
  winText: {
    color: myTheme.colors.green.success,
    fontSize: myTheme.fontSize.xl
  },
  loseText: {
    color: myTheme.colors.red.loss,
    fontSize: myTheme.fontSize.xl
  }
});