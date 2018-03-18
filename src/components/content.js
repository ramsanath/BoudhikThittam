import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';




class ActivityContent extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.activity
        }
    };

    render() {
        const navParams = this.props.navigation.state.params;
        return (
            <ScrollView>
                <Text style={styles.content}>{navParams.content}</Text>
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
