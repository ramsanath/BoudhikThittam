import { firebaseConfig } from './../../config';
import * as firebase from 'firebase';




const firebaseApp = firebase.initializeApp(firebaseConfig);
const databaseRef = firebaseApp.database().ref();

const Api = {
    getEntireDataAnd: (callback) => {
        databaseRef.once('value').then(callback);
    },
    getEntireData: async () => {
        let data = {}
        await databaseRef.once('value').then((snapshot) => {
            data = snapshot.val();
        });
        return data;
    }
}

export default Api;