import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
    View,
    Text,
    Title,
    Heading,
    Subtitle,
    NavigationBar,
    Icon,
    TouchableOpacity
} from '@shoutem/ui';
import { string } from '../i18n/i18n';


class ActivityContent extends Component {
    static navigationOptions = ({ navigation }) => {
        const activityName = string('activities.' + navigation.state.params.activity)
        return {
            title: activityName,
        }
    };

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
            <View styleName='fill-parent vertical' >
                <ScrollView>
                    <View style={styles.container}>
                        <Heading style={styles.heading} styleName='bold multiline'>{this.content.title}</Heading>
                        <Subtitle style={styles.subheading} >{this.content.date}</Subtitle>
                        <Title styleName='multiline' >{this.content.content}</Title>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 15,
    },
    heading: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    },
    subheading: {
        marginTop: 10,
        marginBottom: 20
    },
    content: {
        color: 'black',
        fontSize: 18,
    }
};


export default ActivityContent;
