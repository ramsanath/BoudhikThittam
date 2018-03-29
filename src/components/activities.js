import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Text, ListItem } from 'native-base';
import { string } from './../i18n/i18n';
import Data from '../data/repo';
import Util from '../util/util';

const dataArray = []

class ActivityListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${string('month')}: ${navigation.state.params.monthName}`,
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const navProps = this.props.navigation.state.params;

        let activityList = Data.getActivityList(Util.currentYear(), navProps.monthId);

        const renderRow = (data) => {
            let onPress = () => {
                navigate('Content', {
                    activity: data.name,
                    content: data.activityContent
                })
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
                    dataArray={activityList}
                    renderRow={renderRow} />
            </ScrollView>
        );
    }
}


export default ActivityListScreen;