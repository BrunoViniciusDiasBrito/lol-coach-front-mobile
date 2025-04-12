import { createStackNavigator } from '@react-navigation/stack';
import { TabRoutes } from './tabRoutes';
import { Details } from '../../pages/coach/page/details';
import { myTheme } from '../theme';

const Stack = createStackNavigator()

export const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: myTheme.colors.background,
        },
        headerTintColor: myTheme.colors.white,
        sceneStyle: {
          backgrounColor: myTheme.colors.background,
        },
        tabBarStyle: {
          backgroundColor: myTheme.colors.background,
        }
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabRoutes}
        options={{headerS: false, headerShown: false}}
      />

      <Stack.Screen name="coachDetails" component={Details} options={{
        title: ''
      }} />
    </Stack.Navigator>
  )
}
