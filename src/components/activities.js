import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Row from './row';
import { string } from './../i18n/i18n';
import { routes } from '../util/constants';
import DataManager from '../data/data-manager';
import { ListView } from '@shoutem/ui';

class ActivityListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const monthName = string('months.' + navigation.state.params.month)
        return {
            title: `${monthName} ${string('month')}`
        }
    };

    constructor(props) {
        super(props);
        this.dataArray = this.props.data.getActivityList(
            this.props.appParams.locale,
            this.props.appParams.year,
            this.props.month
        );
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderRow = (data) => {
            const onPress = () => {
                const params = {
                    data: this.props.data,
                    month: this.props.month,
                    activity: data.id,
                    appParams: this.props.appParams
                };
                navigate(routes.content, params);
            }
            return <Row icon={'page'} name={data.name} key={data.id} onPress={onPress} />
        };

        return (
            <ScrollView>
                <ListView
                    data={this.dataArray}
                    renderRow={renderRow} />
            </ScrollView>
        );
    }
}


export default ActivityListScreen;