const products = [
    {
        "id": "1",
        "nombre": "CAMISETA AC MILAN TITULAR 06",
        "precio": 200,
        "boton": "comprar",
        "category": "ligaitaliana",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/milan-06-07-300x400.jpg",
        "stock": 3
    },
    {
        "id": "2",
        "nombre": "CAMISETA BARCELONA TITULAR '05",
        "precio": 200,
        "boton": "comprar",
        "category": "ligaespanola",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/barca-05-06-1-300x400.png",
        "stock": 1
    },
    {
        "id": "3",
        "nombre": "CAMISETA ATLETICO MADIRD TITULAR '94",
        "precio": 180,
        "boton": "comprar",
        "category": "ligaespanola",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/atm-94-95-300x400.png",
        "stock": 1
    },
    {
        "id": "4",
        "nombre": "CAMISETA BAYERN MUNICH TITULAR '12",
        "precio": 220,
        "boton": "comprar",
        "category": "ligaalemana",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/bayern-12-13-300x400.png",
        "stock": 1
    },
    {
        "id": "5",
        "nombre": "CAMISETA BETIS TITULAR '98",
        "precio": 100,
        "boton": "comprar",
        "category": "ligaespanola",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/betis-98-99-300x400.png",
        "stock": 1
    },
    {
        "id": "6",
        "nombre": "CAMISETA REAL MADIRD ALTERNATIVA '99",
        "precio": 180,
        "boton": "comprar",
        "category": "ligaespanola",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/madrid-99-00-visitante-300x400.png",
        "stock": 1
    },
    {
        "id": "7",
        "nombre": "CAMISETA FIORENTINA ALTERNATIVA '92",
        "precio": 200,
        "boton": "comprar",
        "category": "ligaitaliana",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/fiore-92-93-300x400.jpg",
        "stock": 1
    },
    {
        "id": "8",
        "nombre": "CAMISETA FC BARCELONA ALTERNATIVA '08",
        "precio": 200,
        "boton": "comprar",
        "category": "ligaespanola",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/barca-08-09-visitante-300x400.png",
        "stock": 1
    },
    {
        "id": "9",
        "nombre": "CAMISETA JUVENTUS TITULAR '19",
        "precio": 180,
        "boton": "comprar",
        "category": "ligaitaliana",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/juve-palace-19-20-300x400.png",
        "stock": 1
    },
    {
        "id": "10",
        "nombre": "CAMISETA REAL MADRID TITULAR'12",
        "precio": 200,
        "boton": "comprar",
        "category": "ligaespanola",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/madrid-11-12--300x400.png",
        "cantidad": 1
    },
    {
        "id": "11",
        "nombre": "CAMISETA PARIS SAINT GERMAIN TITULAR '92",
        "precio": 200,
        "boton": "comprar",
        "category": "ligafrancesa",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/psg-02-03--300x400.jpg",
        "stock": 1
    },
    {
        "id": "12",
        "nombre": "CAMISETA AC MILAN ALTERNATIVA '09",
        "precio": 180,
        "boton": "comprar",
        "category": "ligaitaliana",
        "img": "https://camisgo.com/wp-content/uploads/2023/05/milan-09-10-300x400.jpg",
        "stock": 1
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (products)
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (itemId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}

