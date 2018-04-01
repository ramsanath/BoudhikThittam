import { firebaseConfig } from '../../app-config';
import * as firebase from 'firebase';
import { storage } from './../util/helper';
import { constants, paths } from './../util/constants';
import { isValidObject } from '../util/util';
import { string, getCurrentLocale } from './../i18n/i18n';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const databaseRef = firebaseApp.database().ref();

function getEntireDataAnd(callback) {
    databaseRef.once('value').then(callback);
}

async function getEntireData() {
    let data = {}
    await databaseRef.once('value').then((snapshot) => {
        data = snapshot.val();
    });
    return data;
}

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
        let data = await getEntireData();
        saveLocally(data);
        callback(data);
    }
};