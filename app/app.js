import { StatusBar } from 'expo-status-bar';
import { MD2LightTheme, PaperProvider } from 'react-native-paper';
import { AppContainer } from './appContainer';
import { myTheme } from './theme';

function Root () {
  return <AppContainer />
}

export default function App() {
  const theme = {
    ...MD2LightTheme,
    colors: {
      ...MD2LightTheme.colors,
      ...myTheme.colors
    }
  }
  return (
    <>
      <StatusBar style="auto" />
      <PaperProvider theme={theme}>
        <Root />
      </PaperProvider>
    </>
  );
}
