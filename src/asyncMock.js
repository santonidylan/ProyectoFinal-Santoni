const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        stock: 25,
        description: 'Descripción de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 800,
        category: 'celular',
        img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=60',        stock: 10,
        description: 'Descripción de Samsung S21'
    },
    {
        id: '3',
        name: 'Ipad 8va gen',
        price: 1200,
        category: 'tablet',
        img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        stock: 10,
        description: 'Descripción de Ipad'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}