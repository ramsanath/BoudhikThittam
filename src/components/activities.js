import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Text, ListItem } from 'native-base';
import { string } from './../i18n/i18n';
import { routes } from '../util/constants';
import DataManager from '../data/data-manager';

class ActivityListScreen extends Component {

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
            return (
                <ListItem
                    key={data.id}
                    onPress={onPress}>
                    <Text>{data.name}</Text>
                </ListItem>
            )
        };

        return (
            <ScrollView>
                <List
                    containerStyle={{ marginBottom: 20 }}
                    dataArray={this.dataArray}
                    renderRow={renderRow} />
            </ScrollView>
        );
    }
}


export default ActivityListScreen;