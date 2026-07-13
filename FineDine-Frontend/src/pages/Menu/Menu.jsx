import { useState } from "react";
import "./Menu.css";

import menuData from "../../data/menuData.js";
import MenuCard from "../../components/MenuCard/MenuCard.jsx";
import MenuList from "../../components/MenuList/MenuList.jsx";

const categories = [
    "All",
    "Popular",
    "Starters",
    "Main Course",
    "Desserts",
    "Wine & Beer",
    "Cocktails",
    "Beverages",
];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const starters = menuData.filter(
        (item) => item.category === "Starters"
    );

    const mains = menuData.filter(
        (item) => item.category === "Main Course"
    );

    const desserts = menuData.filter(
        (item) => item.category === "Desserts"
    );

    const beverages = menuData.filter(
        (item) => item.category === "Beverages"
    );

    const wines = menuData.filter(
        (item) => item.category === "Wine & Beer"
    );

    const cocktails = menuData.filter(
        (item) => item.category === "Cocktails"
    );

    const popular = menuData.filter(
        (item) =>
            item.chefRecommended &&
            ["Starters", "Main Course", "Desserts"].includes(item.category)
    );

    const renderCards = (items) => (
        <div className="menu-grid">
            {items.map((item) => (
                <MenuCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );

    const renderLists = () => (
        <>
            <div className="drink-section">

                <div className="drink-column">
                    <MenuList
                        title="Wine & Beer"
                        items={wines}
                    />
                </div>

                <div className="drink-column">
                    <MenuList
                        title="Cocktails"
                        items={cocktails}
                    />
                </div>

            </div>

            <div className="beverage-section">

                <MenuList
                    title="Beverages"
                    items={beverages}
                />

            </div>
        </>
    );

    const renderContent = () => {

        switch (activeCategory) {

            case "All":

                return (
                    <>
                        <div className="menu-section">

                            <h2 className="section-title">
                                Starters
                            </h2>

                            {renderCards(starters)}

                        </div>

                        <div className="menu-section">

                            <h2 className="section-title">
                                Main Course
                            </h2>

                            {renderCards(mains)}

                        </div>

                        <div className="menu-section">

                            <h2 className="section-title">
                                Desserts
                            </h2>

                            {renderCards(desserts)}

                        </div>

                        {renderLists()}
                    </>
                );

            case "Popular":

                return renderCards(popular);

            case "Starters":

                return renderCards(starters);

            case "Main Course":

                return renderCards(mains);

            case "Desserts":

                return renderCards(desserts);

            case "Wine & Beer":

                return (
                    <MenuList
                        title="Wine & Beer"
                        items={wines}
                    />
                );

            case "Cocktails":

                return (
                    <MenuList
                        title="Cocktails"
                        items={cocktails}
                    />
                );

            case "Beverages":

                return (
                    <MenuList
                        title="Beverages"
                        items={beverages}
                    />
                );

            default:

                return null;
        }

    };
    return (
        <section className="menu-page">

            <div className="menu-header">

                <p className="menu-subtitle">
                    Fine Dining Experience
                </p>

                <h1 className="menu-title">
                    Our Menu
                </h1>

                <p className="menu-description">
                    Experience handcrafted dishes, premium wines,
                    signature cocktails and refreshing beverages,
                    thoughtfully prepared by our chefs.
                </p>

            </div>

            <div className="menu-categories">

                {categories.map((category) => (

                    <button
                        key={category}
                        className={
                            activeCategory === category
                                ? "category-btn active"
                                : "category-btn"
                        }
                        onClick={() => setActiveCategory(category)}
                    >
                        {category === "Popular"
                            ? "⭐ Popular"
                            : category}
                    </button>

                ))}

            </div>

            {renderContent()}

        </section>
    );
};

export default Menu;