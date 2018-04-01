import { firebaseConfig } from '../../app-config';
import * as firebase from 'firebase';
import { storage } from './../util/helper';
import { constants, paths } from './../util/constants';
import { isValidObject, isValidString } from '../util/util';
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

async function getLocalData(callback = () => undefined) {
    const rawLocalData = await storage.get(constants.ENTIRE_DATA, callback);
    if (isValidString(rawLocalData)) {
        const localData = JSON.parse(rawLocalData);
        return localData;
    } else {
        return undefined;
    }
}

export async function loadDataAnd(callback) {
    const localData = await getLocalData();
    if (isValidObject(localData)) {
        callback(localData);
    } else {
        let data = await getEntireData();
        saveLocally(data);
        callback(data);
    }
};