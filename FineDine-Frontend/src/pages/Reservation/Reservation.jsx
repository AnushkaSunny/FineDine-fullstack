import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { createReservation } from "../../services/reservationService";
import "./Reservation.css";

const Reservation = () => {

    const { isAuthenticated, user } = useAuth();
    const location = useLocation();

    const [reservation, setReservation] = useState({
        reservationDate: "",
        reservationTime: "",
        guests: 2,
        occasion: "",
        seatingPreference: "",
        specialRequests: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setReservation({
            ...reservation,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const reservationData = {
                ...reservation,
                customerName: user.fullName,
                customerEmail: user.email,
            };

            await createReservation(reservationData);

            alert("Table reserved successfully!");

            setReservation({
                reservationDate: "",
                reservationTime: "",
                guests: 2,
                occasion: "",
                seatingPreference: "",
                specialRequests: "",
            });

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to reserve table."
            );

        } finally {

            setLoading(false);

        }
    };

    if (!isAuthenticated) {

        return (
            <section className="reservation-page">

                <div className="reservation-container">

                    <h1>Reserve a Table</h1>

                    <p className="reservation-message">
                        Please login or create an account before reserving a table.
                    </p>

                    <div className="reservation-buttons">

                        <Link
                            to="/login"
                            state={{ from: location.pathname }}
                            className="reservation-btn"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            state={{ from: location.pathname }}
                            className="reservation-btn secondary"
                        >
                            Register
                        </Link>

                    </div>

                </div>

            </section>
        );
    }

    return (
        <section className="reservation-page">

            <div className="reservation-container">

                <h1>Reserve a Table</h1>

                <p>Complete the details below to reserve your table.</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Name</label>

                        <input
                            type="text"
                            value={user.fullName}
                            readOnly
                        />

                    </div>

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            value={user.email}
                            readOnly
                        />

                    </div>

                    <div className="form-group">

                        <label>Date</label>

                        <input
                            type="date"
                            name="reservationDate"
                            value={reservation.reservationDate}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Time</label>

                        <input
                            type="time"
                            name="reservationTime"
                            value={reservation.reservationTime}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Number of Guests</label>

                        <input
                            type="number"
                            name="guests"
                            min="1"
                            max="20"
                            value={reservation.guests}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Occasion</label>

                        <select
                            name="occasion"
                            value={reservation.occasion}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Date Night">Date Night</option>
                            <option value="Business Meeting">Business Meeting</option>
                            <option value="Family Gathering">Family Gathering</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label>Seating Preference</label>

                        <select
                            name="seatingPreference"
                            value={reservation.seatingPreference}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Seating</option>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Window Seat">Window Seat</option>
                            <option value="No Preference">No Preference</option>
                        </select>

                    </div>

                    <div className="form-group">

                        <label>Special Requests</label>

                        <textarea
                            name="specialRequests"
                            rows="4"
                            placeholder="Any allergies, celebrations or special requests?"
                            value={reservation.specialRequests}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        type="submit"
                        className="reservation-btn"
                        disabled={loading}
                    >
                        {loading ? "Reserving..." : "Reserve Table"}
                    </button>

                </form>

            </div>

        </section>
    );
};

export default Reservation;