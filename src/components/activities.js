import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Text, ListItem } from 'native-base';
import { string } from './../i18n/i18n';
import Data from '../data/repo';

const dataArray = []

class ActivityListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${string('month')}: ${navigation.state.params.month}`,
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const navProps = this.props.navigation.state.params;

        let activityList = Data.getActivityList(navProps.activities);

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default ActivityListScreen;