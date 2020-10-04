import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBsD80Fx5aVMoxp0lZEIU-7uju6Ya1ZOew",
    authDomain: "hu-nys-cpp.firebaseapp.com",
    databaseURL: "https://hu-nys-cpp.firebaseio.com",
    projectId: "hu-nys-cpp",
    storageBucket: "hu-nys-cpp.appspot.com",
    messagingSenderId: "294544730747",
    appId: "1:294544730747:web:4396b861366ea70a1f50de"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
