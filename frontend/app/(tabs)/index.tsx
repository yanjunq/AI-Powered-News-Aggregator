import { StyleSheet} from 'react-native';
import { AuthenticationNavigator} from '../../Authentication';
import { AppRoutes } from '../../components/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '../../components/Theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeNavigator } from '../../Home';

const AppStack = createStackNavigator<AppRoutes>();

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppStack.Navigator>
          <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
          <AppStack.Screen name="Home" component={HomeNavigator} />
        </AppStack.Navigator>
      </SafeAreaProvider>
  </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
