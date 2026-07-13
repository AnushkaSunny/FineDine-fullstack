import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./MenuCard.css";

const MenuCard = ({ item }) => {
    const { addToCart } = useCart();

    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(item);

        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 1500);
    };

    return (
        <div className="menu-card">

            <div className="menu-card-image">

                <img
                    src={item.image}
                    alt={item.name}
                />

                {item.chefRecommended && (
                    <span className="chef-badge">
                        ⭐ Chef's Pick
                    </span>
                )}

            </div>

            <div className="menu-card-content">

                <div className="menu-card-header">

                    <h3>{item.name}</h3>

                    <span className="menu-price">
                        ${item.price.toFixed(2)}
                    </span>

                </div>

                <p className="menu-description">
                    {item.description}
                </p>

                <div className="menu-card-footer">

                    <span
                        className={`food-badge ${
                            item.isVeg ? "veg" : "nonveg"
                        }`}
                    >
                        {item.isVeg ? "🥗 Veg" : "🍗 Non-Veg"}
                    </span>

                </div>

                <button
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                >
                    {added ? "✓ Added" : "🛒 Add to Cart"}
                </button>

            </div>

        </div>
    );
};

export default MenuCard;