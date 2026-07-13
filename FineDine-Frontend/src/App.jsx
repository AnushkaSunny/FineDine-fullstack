import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";

import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Reservation from "./pages/Reservation/Reservation";
import MyReservations from "./pages/MyReservations/MyReservations";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";

import {
    AboutUs,
    Chef,
    FindUs,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "./container";

import {Navbar, Newsletter} from "./components";

const HomePage = () => (
    <>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Newsletter />
    </>
);

const MenuPage = () => (
    <>
        <Navbar />
        <Menu />
    </>
);

const LoginPage = () => (
    <>
        <Navbar />
        <Login />
    </>
);

const RegisterPage = () => (
    <>
        <Navbar />
        <Register />
    </>
);

const ReservationPage = () => (
    <>
        <Navbar />
        <Reservation />
    </>
);

const MyReservationsPage = () => (
    <>
        <Navbar />
        <MyReservations />
    </>
);

const CartPage = () => (
    <>
        <Navbar />
        <Cart />
    </>
);

const CheckoutPage = () => (
    <>
        <Navbar />
        <Checkout />
    </>
);

const OrderConfirmationPage = () => (
    <>
        <Navbar />
        <OrderConfirmation />
    </>
);

const App = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/menu" element={<MenuPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="/reservation" element={<ReservationPage />} />

            <Route
                path="/my-reservations"
                element={<MyReservationsPage />}
            />

            <Route path="/cart" element={<CartPage />} />

            <Route path="/checkout" element={<CheckoutPage />} />

            <Route
                path="/order-confirmation"
                element={<OrderConfirmationPage />}
            />

        </Routes>
    );
};

export default App;