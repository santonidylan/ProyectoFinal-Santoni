import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'

const sampleProducts = [
  {
    name: 'iPhone 14 Pro', price: 1299, category: 'celular', stock: 15,
    description: 'iPhone 14 Pro con chip A16 Bionic, cámara de 48MP y pantalla Super Retina XDR.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Samsung Galaxy S23', price: 999, category: 'celular', stock: 20,
    description: 'Galaxy S23 con Snapdragon 8 Gen 2 y pantalla Dynamic AMOLED de 6.1".',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Xiaomi 13', price: 749, category: 'celular', stock: 12,
    description: 'Xiaomi 13 con Snapdragon 8 Gen 2 y cámara Leica de 50MP.',
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'iPad Pro 12.9"', price: 1099, category: 'tablet', stock: 8,
    description: 'iPad Pro con chip M2 y pantalla Liquid Retina XDR de 12.9".',
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Samsung Galaxy Tab S9', price: 799, category: 'tablet', stock: 10,
    description: 'Galaxy Tab S9 con Snapdragon 8 Gen 2 y resistencia IP68.',
    img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'MacBook Air M2', price: 1199, category: 'laptop', stock: 6,
    description: 'MacBook Air con chip M2, pantalla Liquid Retina 13.6", 8GB RAM.',
    img: 'https://images.unsplash.com/photo-1611186871525-b2e2d67e9527?auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Dell XPS 15', price: 1499, category: 'laptop', stock: 5,
    description: 'Dell XPS 15 con Intel Core i7, pantalla OLED 3.5K y 16GB RAM.',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'AirPods Pro 2', price: 249, category: 'audio', stock: 30,
    description: 'AirPods Pro 2da generación con cancelación de ruido y 30hs de batería.',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=60',
  },
]

export const seedFirestore = async () => {
  try {
    const productsRef = collection(db, 'products')
    for (const product of sampleProducts) {
      await addDoc(productsRef, product)
      console.log(`✅ Cargado: ${product.name}`)
    }
    console.log('🎉 ¡Todos los productos fueron cargados!')
  } catch (e) {
    console.error('❌ Error al cargar productos:', e)
  }
}