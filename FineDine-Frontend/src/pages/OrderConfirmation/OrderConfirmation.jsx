import { Link, useLocation } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
    const location = useLocation();

    const {
        orderNumber,
        diningOption,
        paymentMethod,
        total,
    } = location.state || {};

    return (
        <section className="confirmation-page">

            <div className="confirmation-card">

                <div className="success-icon">
                    ✅
                </div>

                <h1>Order Confirmed!</h1>

                <p className="confirmation-message">
                    Thank you for choosing FineDine.
                    Your order has been placed successfully.
                </p>

                <div className="confirmation-details">

                    <div>
                        <span>Order Number</span>
                        <strong>#{orderNumber}</strong>
                    </div>

                    <div>
                        <span>Dining Option</span>
                        <strong>
                            {diningOption === "dine-in"
                                ? "Dine In"
                                : "Takeaway"}
                        </strong>
                    </div>

                    <div>
                        <span>Payment</span>
                        <strong>
                            {paymentMethod === "cash"
                                ? "Cash"
                                : "Card"}
                        </strong>
                    </div>

                    <div>
                        <span>Total Paid</span>
                        <strong>
                            ${total?.toFixed(2)}
                        </strong>
                    </div>

                    <div>
                        <span>Estimated Preparation</span>
                        <strong>20 - 25 Minutes</strong>
                    </div>

                </div>

                <div className="confirmation-buttons">

                    <Link
                        to="/"
                        className="home-btn"
                    >
                        Back to Home
                    </Link>

                    <Link
                        to="/menu"
                        className="menu-btn"
                    >
                        Continue Ordering
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default OrderConfirmation;