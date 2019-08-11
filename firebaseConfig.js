import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDjOZ7ui111bO78xo3caT3BnNrBnLc9gS4',
  authDomain: 'vinscannerapp.firebaseapp.com',
  databaseURL: 'https://vinscannerapp.firebaseio.com',
  projectId: 'vinscannerapp',
  storageBucket: '',
  messagingSenderId: '1066590212649',
  appId: '1:1066590212649:web:29a527dd0eda3e60'
};

const app = firebase.initializeApp(config);
const db = firebase.firestore();
export { app, db };
