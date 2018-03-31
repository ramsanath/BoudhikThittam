import React, { Component } from 'react';
import localStorage from 'react-native-sync-localstorage';


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
    put: (key, val) => {
        try {
            return localStorage.setItem(key, val);
        } catch (error) {
            console.error(error);
        }
    },
    get: (key) => {
        let val;
        try {
            val = localStorage.getItem(key);
        } catch (error) {
            console.error(error);
        }
        return val;
    }
};