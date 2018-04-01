import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Row, Text, View, Icon } from '@shoutem/ui';
import Divider from './divider';



class RowItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1, flexDirection: 'row' }} >
                <View style={styles.rowContainer}>
                    <Row styleName="small">
                        <Icon name={this.props.icon} />
                        <Text>{this.props.name}</Text>
                        <Icon styleName="disclosure" name="right-arrow" />
                    </Row>
                    <Divider />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    rowContainer: {
        flex: 1,
        flexDirection: 'column'
    }
}

export default RowItem;
