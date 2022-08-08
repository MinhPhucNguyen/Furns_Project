import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD87BqVvA0eqFyko6ueRg4utsQnnxuGbYY',
    authDomain: 'furns-project.firebaseapp.com',
    projectId: 'furns-project',
    storageBucket: 'furns-project.appspot.com',
    messagingSenderId: '30112551689',
    appId: '1:30112551689:web:d7a2a5197f230f8caf39d8',
    measurementId: 'G-G1V8SVY1LM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
