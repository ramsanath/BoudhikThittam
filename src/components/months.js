import React, { Component } from 'react'
import { View, StyleSheet, ToastAndroid, ScrollView } from 'react-native'
import { ListView } from '@shoutem/ui';
import { routes } from '../util/constants';
import DataManager from '../data/data-manager';
import Row from './row';
import { string } from '../i18n/i18n';
import { currentYear } from '../util/util';

class MonthListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${string('appName')} : ${currentYear()}`,
        }
    };

    constructor(props) {
        super(props);
        this.dataArray = this.props.data.getMonthList(
            this.props.appParams.locale,
            this.props.appParams.year,
        )
    }

    render() {
        const renderRow = (data) => {
            const onPress = () => {
                const params = {
                    data: this.props.data,
                    appParams: this.props.appParams,
                    month: data.id
                };
                this.props.navigation.navigate(routes.activity, params)
            }
            return <Row icon={'events'} name={data.name} key={data.id} onPress={onPress} />
        }

        return (
            <ScrollView>
                <ListView
                    data={this.dataArray}
                    renderRow={renderRow} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default MonthListScreen;