import { storage } from './../util/helper';
import { constants, paths } from './../util/constants';
import { isValidObject } from '../util/util';
import Api from './api';
import { string, getCurrentLocale } from './../i18n/i18n';


function saveLocally(data) {
    const serializedData = JSON.stringify(data);
    storage.put(constants.ENTIRE_DATA, serializedData);
}

const getData = () => {
    let jsonData = storage.get(constants.ENTIRE_DATA);
    return (jsonData == undefined) ? undefined : JSON.parse(jsonData);
};

export const loadDataAnd = async (callback) => {
    if (!isValidObject(getData())) {
        let data = await Api.getEntireData();
        saveLocally(data);
        callback(data);
    }
};