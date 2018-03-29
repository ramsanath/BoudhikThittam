import { AsyncStorage } from 'react-native';
import C from './../util/constants';
import Util from './util';
import localStorage from 'react-native-sync-localstorage'


export default Helper = {
    localStorage: {
        put: (key, val) => localStorage.setItem(key, val),
        get: (key, val) => localStorage.getItem(key)
    },
    setLaunchedFlag: () => {
        AsyncStorage.setItem(C.HAS_LAUNCHED, 'true');
    },
    isFirstLaunch: async () => {
        try {
            const hasLaunched = await AsyncStorage.getItem(C.HAS_LAUNCHED);
            if (Util.isValidString(hasLaunched)) {
                this.Helper.setLaunchedFlag();
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    },
    doOnFirstLaunch: (func) => {
        if (this.isFirstLaunch()) {
            func();
        }
    }
};