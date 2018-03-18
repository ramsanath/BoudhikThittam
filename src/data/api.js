import { firebaseConfig } from './../../config';
import * as firebase from 'firebase';




const firebaseApp = firebase.initializeApp(firebaseConfig);
const databaseRef = firebaseApp.database().ref();

export const getEntireData = async () => {
    let data = {}
    await databaseRef.child('years').once('value').then((snapshot) => { data = snapshot.val(); });
    return data;
}