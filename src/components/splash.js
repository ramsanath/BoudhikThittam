import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { string } from './../i18n/i18n';
import { routes } from '../util/constants';
import { loadDataAnd } from './../data/repo';
import { currentYear } from '../util/util';
import { getLocalePreference } from '../user-config';
import DataManager from '../data/data-manager';


class SplashScreen extends Component {

    async componentDidMount() {
        const { navigate } = this.props.navigation;

        const appParams = {
            // Default configuration params that is passes to all our screens (month, activity, content).
            year: currentYear(),
            locale: getLocalePreference()
        };

        const proceedToApp = (data) => {
            // This function will be called after the data is fetched from the database or local storage.
            const dataManager = new DataManager(data);
            const params = {
                // This is what is passes as the props to the navigating screen.
                data: dataManager,
                appParams
            };
            navigate(routes.month, params);
        }
        loadDataAnd(proceedToApp);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{string('loading')}</Text>
                <Spinner />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});


export default SplashScreen;
