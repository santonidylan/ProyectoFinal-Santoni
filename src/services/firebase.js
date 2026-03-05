import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAtl7uE3WsX1eP85r_buRYiSEcKJMFJ9Y8",
  authDomain: "entregasantoni-4613e.firebaseapp.com",
  projectId: "entregasantoni-4613e",
  storageBucket: "entregasantoni-4613e.firebasestorage.app",
  messagingSenderId: "475216706458",
  appId: "1:475216706458:web:5bd289bfd7cf1b4feed823"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)