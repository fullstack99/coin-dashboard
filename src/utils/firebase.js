import firebase from "firebase"

const config = {
  apiKey: 'AIzaSyBewBHnHgGVKG-c6u42T0BFeDLy_l2ZKM8',
  authDomain: 'coingenius-253507.firebaseapp.com',
  databaseURL: 'https://coingenius-253507.firebaseio.com',
  projectId: 'coingenius-253507',
  storageBucket: 'coingenius-253507.appspot.com',
  messagingSenderId: '861149901860',
  appId: '1:861149901860:web:0fdd111c9fe7cecd01d4b1'
}

firebase.initializeApp(config);

export default firebase