import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { myTheme } from '../../../app/theme'
import { Card } from '../../../widgets/Card'

export const CoachCardList = ({list}) => {
  const navigation = useNavigation()

  const detailsHandler = (item) => {
    // console.log(item)
    navigation.navigate('coachDetails', {
      ...item
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
          {list.map(item => {
            return (
              <Pressable
                android_ripple={({}) => {}}
                onPress={() => detailsHandler(item)}
                style={({pressed}) => [pressed && styles.iconButton]}
                key={item.id}
              >
                <Card.Container style={styles.card}>
                  <Card.Image style={styles.image} size={40} iconLabel={item.iconLabel} />

                  <Card.Content style={styles.name}>
                    <Card.Label style={styles.cardLabel} label={item.name} />
                  </Card.Content>

                  <Card.Content style={styles.detailsArrow}>
                      <Card.Icon icon='arrow-right-drop-circle-outline' size={40} color="white" style={styles.icon} />
                  </Card.Content>
                </Card.Container>
              </Pressable>
            )
          })}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12
  },
  cardContainer: {
    gap: 6
  },
  title: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontSize.xl,
    paddingTop: 4,
    paddingBottom: 16,
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
  },
  image: {
    flexGrow: 0.5,
  },
  name: {
    flexGrow: 5,
    alignSelf: 'center'
  },
  detailsArrow: {
    alignSelf: 'center',
    flexGrow: 0.5,
    alignItems: 'flex-end',
  },
  cardLabel: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontSize.medium,
  },
  cardText: {
    color: myTheme.colors.white,
    opacity: 0.6
  },
  iconButton: {
    opacity: 0.8
  },
  icon: {
    
  }
})