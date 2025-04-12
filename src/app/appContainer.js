import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './routes/stackRoutes';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}