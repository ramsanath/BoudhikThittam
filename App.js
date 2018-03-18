import { StackNavigator } from 'react-navigation';

import MonthListScreen from './src/components/months';
import ActivityListScreen from './src/components/activities';
import SplashScreen from './src/components/splash';
import ActivityContent from './src/components/content';




const App = StackNavigator({
  Splash: { screen: SplashScreen },
  Month: { screen: MonthListScreen },
  Activity: { screen: ActivityListScreen },
  Content: { screen: ActivityContent }
});


export default App