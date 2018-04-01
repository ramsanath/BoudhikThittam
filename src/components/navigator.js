import { StackNavigator } from 'react-navigation';
import { mapNavParamsToProps } from '../util/helper';
import { string } from '../i18n/i18n';
import MonthListScreen from '../components/months';
import ActivityListScreen from '../components/activities';
import SplashScreen from '../components/splash';
import ActivityContent from '../components/content';


export default AppNavigator = StackNavigator({
    Splash: {
        screen: mapNavParamsToProps(SplashScreen),
        navigationOptions: {
            header: null,
            title: string('appName'),
        }
    },
    Month: {
        screen: mapNavParamsToProps(MonthListScreen),
        navigationOptions: {
            title: string('appName'),
            headerLeft: null,
            headerBackTitle: null
        }
    },
    Activity: {
        screen: mapNavParamsToProps(ActivityListScreen),
        navigationOptions: {
            headerBackTitle: null
        }
    },
    Content: {
        screen: mapNavParamsToProps(ActivityContent)
    }
});
