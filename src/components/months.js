import React, { Component } from 'react'
import { View, StyleSheet, ToastAndroid, ScrollView } from 'react-native'
import { List, Text, ListItem } from 'native-base'
import Util from './../util/util';
import { string } from './../i18n/i18n';

class MonthListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${string('year')}: ${Util.currentYear()}`,
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const navProps = this.props.navigation.state.params;
        const dataArray = navProps.monthList
        console.log(dataArray);

        const renderRow = (data) => {
            let onPress = () => {
                navigate('Activity', {
                    month: data.name,
                    activities: data.monthActivities
                })
            }
            return (
                <ListItem
                    key={data.id}
                    onPress={onPress}>
                    <Text>{data.name}</Text>
                </ListItem>
            )
        }

        return (
            <ScrollView>
                <List
                    dataArray={dataArray}
                    renderRow={renderRow}
                    containerStyle={{ marginBottom: 20 }} />
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

