import { Platform, StyleSheet, Text, View } from 'react-native'
import { Card } from '../../../widgets/Card'
import { myTheme } from '../../../app/theme';

export const DetailsStudentCard = ({student}) => {
  return (
    <View>
      <Text style={styles.title}>{student.elo}</Text>
      <Card.Container style={styles.card}>
        <Card.Image iconLabel={student.iconLabel} />

        <Card.Content style={styles.cardContainer}>
          <Card.Label style={styles.cardLabel} label={student.name} />
          <Card.CardText style={styles.cardText} text={student.name} />
        </Card.Content>
      </Card.Container>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: myTheme.colors.blue[500],
    marginBottom: 8,
    fontSize: myTheme.fontSize.xxl,
    textAlign: 'center'
  },
  text: {
    color: myTheme.colors.white
  },
  cardContainer: {
  },
  card: {
    gap: 12,
    flexDirection: 'row',
    padding: 16,
    width: '100%',
    borderRadius: 16,
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