import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACcYiUw3GAnfrUZfotniluntPN5tvrO8g",
  authDomain: "taskflow-2e1c4.firebaseapp.com",
  projectId: "taskflow-2e1c4",
  storageBucket: "taskflow-2e1c4.firebasestorage.app",
  messagingSenderId: "881227948521",
  appId: "1:881227948521:web:800c94e863a68ea7c5ab78",
  measurementId: "G-MFGD94ZW5Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
