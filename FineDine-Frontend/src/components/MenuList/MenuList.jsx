import React from "react";
import "./MenuList.css";

const MenuList = ({ title, items }) => {
    return (
        <div className="drink-menu">
            <h2 className="drink-menu-title">
                {title}
            </h2>

            {items.map((item) => (
                <div
                    className="drink-item"
                    key={item.id}
                >
                    <div className="drink-item-header">

                        <h3>{item.name}</h3>

                        <div className="drink-line"></div>

                        <span className="drink-price">
              ${item.price}
            </span>

                    </div>

                    <p className="drink-description">
                        {item.description}
                    </p>

                    <div className="drink-btn-container">
                        <button className="drink-cart-btn">
                            🛒 Add to Cart
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default MenuList;