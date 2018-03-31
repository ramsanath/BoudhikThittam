import React, { Component } from 'react'
import { View, StyleSheet, ToastAndroid, ScrollView } from 'react-native'
import { List, Text, ListItem } from 'native-base'
import { routes } from '../util/constants';
import DataManager from '../data/data-manager';

class MonthListScreen extends Component {

    constructor(props) {
        super(props);
        const { setParams } = this.props.navigation;
        setParams({ title: 'dadasd' })
        this.dataArray = this.props.data.getMonthList(
            this.props.appParams.locale,
            this.props.appParams.year,
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderRow = (data) => {
            const onPress = () => {
                const params = {
                    data: this.props.data,
                    appParams: this.props.appParams,
                    month: data.id
                };
                navigate(routes.activity, params)
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
                    dataArray={this.dataArray}
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