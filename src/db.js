import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCThHkiap733yhp5yG45S7xQu16KcEZodU",
    authDomain: "data-grab-vue.firebaseapp.com",
    databaseURL: "https://data-grab-vue.firebaseio.com",
    projectId: "data-grab-vue",
    storageBucket: "data-grab-vue.appspot.com",
    messagingSenderId: "554713900589",
    appId: "1:554713900589:web:d4d8e2160472f348237aa4",
    measurementId: "G-R86R0NY9MY"
  })

  const db = firebaseApp.firestore()

  export { db }
  