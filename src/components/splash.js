import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { string } from './../i18n/i18n';
import { NavigationActions } from 'react-navigation';

import { loadDataAnd } from './../data/repo';




class SplashScreen extends Component {

    async componentDidMount() {
        const { navigate } = this.props.navigation;
        const goToMonths = (data) => navigate('Month');
        loadDataAnd(goToMonths);
    }

    static navigationOptions = {
        title: string('appName'),
    };
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
