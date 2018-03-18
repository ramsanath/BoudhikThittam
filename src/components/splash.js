import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from './../i18n/i18n';
import { Spinner } from 'native-base';

import Data, { getData } from './../data/repo';
import Util from '../util/util';




class SplashScreen extends Component {

    async componentDidMount() {
        const { navigate } = this.props.navigation;
        let data = await getData();
        const monthList = Data.getMonthList(Util.currentYear());
        navigate('Month', { monthList: monthList })
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
