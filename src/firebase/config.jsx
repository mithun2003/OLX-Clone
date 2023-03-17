import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdMJ0VkCS1SsL3yygHLzf_CSQ1YuFUGwY",
    authDomain: "olx-clone-75e9a.firebaseapp.com",
    projectId: "olx-clone-75e9a",
    storageBucket: "olx-clone-75e9a.appspot.com",
    messagingSenderId: "198666438170",
    appId: "1:198666438170:web:317b86fa5222c231a8b3a3",
    measurementId: "G-7V0SM19D3P"
  };
  
  const Firebase = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(Firebase)
  
  export default firebase
