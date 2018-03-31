import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


class ActivityContent extends Component {

    constructor(props) {
        super(props);
        this.content = this.props.data.getContent(
            this.props.appParams.locale,
            this.props.appParams.year,
            this.props.month,
            this.props.activity,
        )
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.content}>{this.content}</Text>
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
    content: {
        color: 'black',
        fontSize: 18,
    }
});


export default ActivityContent;
