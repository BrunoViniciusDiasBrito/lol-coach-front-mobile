import { StyleSheet, Text, View } from 'react-native'
import { myTheme } from '../../app/theme'

export const InfoBLock = ({title, subtitle, content}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.block}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontSize.xxl,
    paddingVertical: 16
  },
  block: {
    backgroundColor: myTheme.colors.surface,
    borderColor: myTheme.colors.gray.border,
    borderWidth: 1,
    padding: 16,
    width: '100%',
    borderRadius: 16,
  },
  subtitle: {
    color: myTheme.colors.white,
    fontSize: myTheme.fontSize.xl,
    marginBottom: 4
  },
  content: {
    color: myTheme.colors.white,
    opacity: 0.6,
    fontSize: myTheme.fontSize.medium
  },
})