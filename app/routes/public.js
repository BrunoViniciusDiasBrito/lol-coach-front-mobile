import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home/page';
import Matches from '../../pages/matches/pages';
import { Icon } from 'react-native-paper';
import { myTheme } from '../theme';
import { Champions } from '../../pages/champions/page';
import { Coach } from '../../pages/coach/page';

const Tab  = createBottomTabNavigator()

export const PublicRoutes = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Summoner',
          tabBarIcon: ({color}) => (
            <Icon source='robot-excited-outline' size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Matches'
        component={Matches}
        options={{ 
          title: 'Matches',
          tabBarIcon: ({color}) => (
            <Icon source='xmpp' size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='Champions'
        component={Champions}
        options={{
          title: 'Champions',
          tabBarIcon: ({color}) => (
            <Icon source='unicorn-variant' size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='Coaching'
        component={Coach}
        options={{
          title: 'Coaching',
          tabBarIcon: ({color}) => (
            <Icon source='account-supervisor-circle' size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}