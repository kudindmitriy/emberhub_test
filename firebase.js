import firebase from '@firebase/app'
import '@firebase/firestore'

const config = {
  apiKey: 'AIzaSyCQxFdBpZd2JAZeu2rrpAI2SqoemtrbtNQ',
  authDomain: 'emerhub-test-task.firebaseapp.com',
  databaseURL: 'https://emerhub-test-task.firebaseio.com',
  projectId: 'emerhub-test-task',
  storageBucket: 'emerhub-test-task.appspot.com',
  messagingSenderId: '791809313737',
  appId: '1:791809313737:web:3182fe36ada3d6e8a87618',
  measurementId: 'G-Q2CG6T8WL3'
}
const settings = {
  timestampsInSnapshots: true
}

firebase.initializeApp(config)
const db = firebase.firestore()
db.settings(settings)

export default db
