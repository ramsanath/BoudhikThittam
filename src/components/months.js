import React, { Component } from 'react'
import { View, StyleSheet, ToastAndroid, ScrollView } from 'react-native'
import { List, Text, ListItem } from 'native-base'
import Util from './../util/util';
import Helper from './../util/helper';
import { string } from './../i18n/i18n';
import Data from './../data/repo';

class MonthListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${string('year')}: ${Util.currentYear()}`,
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        const navProps = this.props.navigation.state.params;

        const dataArray = Data.getMonthList(Util.currentYear());
        console.log('data array ')

        const renderRow = (data) => {
            let onPress = () => {
                navigate('Activity', {
                    monthId: data.id,
                    monthName: data.name,
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

