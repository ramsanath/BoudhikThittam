import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Divider extends Component {
    render() {
        return <View style={styles.divider} />
    }
}

const styles = StyleSheet.create({
    divider: {
        flex: 1,
        flexDirection: 'row',
        height: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },
});

export default Divider;
