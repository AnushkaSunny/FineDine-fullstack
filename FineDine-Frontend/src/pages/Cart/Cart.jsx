import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const navigate = useNavigate();

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
    } = useCart();

    const [diningOption, setDiningOption] = useState("dine-in");

    const handleCheckout = () => {
        navigate("/checkout", {
            state: {
                diningOption,
            },
        });
    };

    return (
        <section className="cart-page">

            <div className="cart-container">

                <h1>My Cart</h1>

                {cartItems.length === 0 ? (

                    <div className="empty-cart">

                        <h2>Your cart is empty.</h2>

                        <p>
                            Explore our delicious menu and add your favourite dishes.
                        </p>

                        <Link
                            to="/menu"
                            className="continue-btn"
                        >
                            Browse Menu
                        </Link>

                    </div>

                ) : (

                    <>

                        {cartItems.map((item) => (

                            <div
                                key={item.id}
                                className="cart-item"
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="cart-details">

                                    <h3>{item.name}</h3>

                                    <p>${item.price.toFixed(2)}</p>

                                    <div className="quantity-controls">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                        >
                                            −
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                <div className="cart-actions">

                                    <p className="subtotal">
                                        $
                                        {(
                                            item.price *
                                            item.quantity
                                        ).toFixed(2)}
                                    </p>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        ))}

                        <div className="dining-option">

                            <h3>Dining Option</h3>

                            <div className="dining-options">

                                <label
                                    className={
                                        diningOption === "dine-in"
                                            ? "dining-card active"
                                            : "dining-card"
                                    }
                                >
                                    <input
                                        type="radio"
                                        name="dining"
                                        value="dine-in"
                                        checked={diningOption === "dine-in"}
                                        onChange={(e) =>
                                            setDiningOption(e.target.value)
                                        }
                                    />

                                    <div>
                                        <h4>🍽 Dine In</h4>

                                        <p>
                                            Enjoy your meal at our restaurant.
                                        </p>
                                    </div>

                                </label>

                                <label
                                    className={
                                        diningOption === "takeaway"
                                            ? "dining-card active"
                                            : "dining-card"
                                    }
                                >
                                    <input
                                        type="radio"
                                        name="dining"
                                        value="takeaway"
                                        checked={diningOption === "takeaway"}
                                        onChange={(e) =>
                                            setDiningOption(e.target.value)
                                        }
                                    />

                                    <div>
                                        <h4>🥡 Takeaway</h4>

                                        <p>
                                            Pick up your order when it's ready.
                                        </p>
                                    </div>

                                </label>

                            </div>

                        </div>

                        <div className="cart-summary">

                            <h2>
                                Total: ${cartTotal.toFixed(2)}
                            </h2>

                            <div className="cart-buttons">

                                <button
                                    className="clear-btn"
                                    onClick={clearCart}
                                >
                                    Clear Cart
                                </button>

                                <button
                                    className="checkout-btn"
                                    onClick={handleCheckout}
                                >
                                    Continue to Checkout
                                </button>

                            </div>

                        </div>

                    </>

                )}

            </div>

        </section>
    );
};

export default Cart;