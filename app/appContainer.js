import { NavigationContainer } from '@react-navigation/native'
import { PublicRoutes } from './routes/public';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}