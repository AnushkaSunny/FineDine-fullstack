import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const { user, isAuthenticated, logout } = useAuth();
    const { cartCount } = useCart();

    const sectionLink = (id) => {
        if (location.pathname === "/") {
            return `#${id}`;
        }

        return `/#${id}`;
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="app__navbar">

            <div className="app__navbar-logo">
                <Link to="/">
                    <img src={images.gericht} alt="FineDine Logo" />
                </Link>
            </div>

            <ul className="app__navbar-links">

                <li className="p__opensans">
                    <Link to="/">Home</Link>
                </li>

                <li className="p__opensans">
                    <a href={sectionLink("about")}>About</a>
                </li>

                <li className="p__opensans">
                    <Link to="/menu">Menu</Link>
                </li>

                <li className="p__opensans">
                    <a href={sectionLink("awards")}>Awards</a>
                </li>

                <li className="p__opensans">
                    <a href={sectionLink("contact")}>Contact</a>
                </li>

            </ul>

            <div className="app__navbar-login">

                {isAuthenticated ? (
                    <>
                        <span className="p__opensans navbar-user">
                            {user?.fullName}
                        </span>

                        <div className="navbar-divider" />

                        <Link
                            to="/my-reservations"
                            className="p__opensans"
                        >
                            My Reservations
                        </Link>

                        <div className="navbar-divider" />

                        <button
                            type="button"
                            className="p__opensans navbar-logout-link"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="p__opensans"
                        >
                            Log In / Register
                        </Link>

                        <div />
                    </>
                )}

                <Link
                    to="/reservation"
                    className="p__opensans"
                >
                    Book Table
                </Link>

                <Link
                    to="/cart"
                    className="p__opensans"
                >
                    🛒 Cart ({cartCount})
                </Link>

            </div>

            <div className="app__navbar-smallscreen">

                <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={() => setToggleMenu(true)}
                />

                {toggleMenu && (

                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">

                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => setToggleMenu(false)}
                        />

                        <ul className="app__navbar-smallscreen-links">

                            <li className="p__opensans">
                                <Link
                                    to="/"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="p__opensans">
                                <a
                                    href={sectionLink("about")}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    About
                                </a>
                            </li>

                            <li className="p__opensans">
                                <Link
                                    to="/menu"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Menu
                                </Link>
                            </li>

                            <li className="p__opensans">
                                <a
                                    href={sectionLink("awards")}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Awards
                                </a>
                            </li>

                            <li className="p__opensans">
                                <a
                                    href={sectionLink("contact")}
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Contact
                                </a>
                            </li>

                            <li className="p__opensans">
                                <Link
                                    to="/reservation"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    Book Table
                                </Link>
                            </li>

                            {isAuthenticated && (
                                <li className="p__opensans">
                                    <Link
                                        to="/my-reservations"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        My Reservations
                                    </Link>
                                </li>
                            )}

                            <li className="p__opensans">
                                <Link
                                    to="/cart"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    🛒 Cart ({cartCount})
                                </Link>
                            </li>

                            {!isAuthenticated ? (
                                <li className="p__opensans">
                                    <Link
                                        to="/login"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        Login / Register
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li className="p__opensans">
                                        {user?.fullName}
                                    </li>

                                    <li>
                                        <button
                                            type="button"
                                            className="p__opensans navbar-logout-link"
                                            onClick={() => {
                                                handleLogout();
                                                setToggleMenu(false);
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}

                        </ul>

                    </div>

                )}

            </div>

        </nav>
    );
};

export default Navbar;