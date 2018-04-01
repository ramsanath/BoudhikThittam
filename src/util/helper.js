import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';


export function mapNavParamsToProps(SomeComponent) {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions;
        render() {
            const params = this.props.navigation.state.params
            return <SomeComponent {...this.props} {...params} />
        }
    }
}

export const storage = {
    put: (key, value) => {
        AsyncStorage.setItem(key, value)
            .catch(error => console.error(error));
    },
    get: async function (key, callback) {
        const data = await AsyncStorage.getItem(key).then(callback);
        return data;
    }
};