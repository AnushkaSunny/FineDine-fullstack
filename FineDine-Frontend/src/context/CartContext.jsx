import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("fineDineCart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "fineDineCart",
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    const addToCart = (item) => {
        const existingItem = cartItems.find(
            (cartItem) => cartItem.id === item.id
        );

        if (existingItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                        }
                        : cartItem
                )
            );
        } else {
            setCartItems([
                ...cartItems,
                {
                    ...item,
                    quantity: 1,
                },
            ]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(
            cartItems.filter((item) => item.id !== id)
        );
    };

    const increaseQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const cartCount = cartItems.reduce(
        (count, item) => count + item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);