import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { cartItems, cartTotal, clearCart } = useCart();

    const diningOption =
        location.state?.diningOption || "takeaway";

    const [paymentMethod, setPaymentMethod] = useState("cash");

    const tax = cartTotal * 0.05;
    const serviceCharge = 2;
    const grandTotal = cartTotal + tax + serviceCharge;

    const handlePlaceOrder = () => {
        const orderNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        clearCart();

        navigate("/order-confirmation", {
            state: {
                orderNumber,
                diningOption,
                paymentMethod,
                total: grandTotal,
            },
        });
    };

    return (
        <section className="checkout-page">

            <div className="checkout-container">

                <h1>Checkout</h1>

                <div className="checkout-summary">

                    <h2>Order Summary</h2>

                    {cartItems.map((item) => (

                        <div
                            className="checkout-item"
                            key={item.id}
                        >

                            <span>

                                {item.name} × {item.quantity}

                            </span>

                            <span>

                                $
                                {(item.price * item.quantity).toFixed(2)}

                            </span>

                        </div>

                    ))}

                </div>

                <div className="checkout-details">

                    <div>
                        <span>Dining Option</span>
                        <span>
                            {diningOption === "dine-in"
                                ? "Dine In"
                                : "Takeaway"}
                        </span>
                    </div>

                    <div>
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>

                    <div>
                        <span>Tax (5%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>

                    <div>
                        <span>Service Charge</span>
                        <span>${serviceCharge.toFixed(2)}</span>
                    </div>

                    <div className="checkout-total">

                        <span>Total</span>

                        <span>

                            ${grandTotal.toFixed(2)}

                        </span>

                    </div>

                </div>

                <div className="payment-section">

                    <h2>Payment Method</h2>

                    <label>

                        <input
                            type="radio"
                            checked={paymentMethod === "cash"}
                            onChange={() =>
                                setPaymentMethod("cash")
                            }
                        />

                        Cash

                    </label>

                    <label>

                        <input
                            type="radio"
                            checked={paymentMethod === "card"}
                            onChange={() =>
                                setPaymentMethod("card")
                            }
                        />

                        Card (Coming Soon)

                    </label>

                </div>

                <button
                    className="place-order-btn"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </button>

            </div>

        </section>
    );
};

export default Checkout;