import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    
    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd]);
        } else {
            console.error('El producto ya está agregado');
        }
    };

    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    
    const clearCart = () => {
        setCart([]);
    };

    
    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity;
        });
        return accu;
    };

    
    const [total, setTotal] = useState(0);

    
    const totalQuantity = getTotalQuantity();

    useEffect(() => {
        
        setTotal(getTotalQuantity());
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
