import { db } from './firebase'
import {
  collection, getDocs, getDoc, doc,
  query, where, addDoc, serverTimestamp,
} from 'firebase/firestore'

export const getProducts = async (categoryId = null) => {
  const productsRef = collection(db, 'products')
  const q = categoryId
    ? query(productsRef, where('category', '==', categoryId))
    : productsRef
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductById = async (productId) => {
  const docRef = doc(db, 'products', productId)
  const snapshot = await getDoc(docRef)
  if (!snapshot.exists()) return null
  return { id: snapshot.id, ...snapshot.data() }
}

export const createOrder = async (orderData) => {
  const ordersRef = collection(db, 'orders')
  const docRef = await addDoc(ordersRef, {
    ...orderData,
    date: serverTimestamp(),
  })
  return docRef.id
}