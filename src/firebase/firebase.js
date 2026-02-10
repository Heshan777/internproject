import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDr3SbdV0yFyraUV5piImNwmTCLPy3lu-M",
  authDomain: "internlink-dca18.firebaseapp.com",
  projectId: "internlink-dca18",
  storageBucket: "internlink-dca18.firebasestorage.app",
  messagingSenderId: "690591004296",
  appId: "1:690591004296:web:12509fbd8f3aff397c913d"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }