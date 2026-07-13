import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
    getReservationsByEmail,
    deleteReservation,
} from "../../services/reservationService";

import {
    FaCalendarAlt,
    FaClock,
    FaUsers,
    FaGlassCheers,
    FaChair,
    FaStickyNote,
} from "react-icons/fa";

import "./MyReservations.css";

const MyReservations = () => {

    const { user } = useAuth();

    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadReservations();
    }, []);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const formatTime = (time) => {
        const [hours, minutes] = time.split(":");

        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        return date.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
        });
    };

    const loadReservations = async () => {

        try {

            const data = await getReservationsByEmail(user.email);

            setReservations(data);

        } catch (error) {

            console.error(error);
            alert("Failed to load reservations.");

        } finally {

            setLoading(false);

        }

    };

    const handleCancel = async (id) => {

        if (!window.confirm("Cancel this reservation?")) return;

        try {

            await deleteReservation(id);

            setReservations(
                reservations.filter(
                    reservation => reservation.id !== id
                )
            );

        } catch (error) {

            console.error(error);
            alert("Failed to cancel reservation.");

        }

    };

    if (loading) {
        return (
            <section className="my-reservations-page">
                <h2>Loading...</h2>
            </section>
        );
    }

    return (

        <section className="my-reservations-page">

            <div className="my-reservations-container">

                <h1>My Reservations</h1>

                {reservations.length === 0 ? (

                    <p className="empty-text">
                        You don't have any reservations yet.
                    </p>

                ) : (

                    reservations.map((reservation) => (

                        <div
                            className="reservation-card"
                            key={reservation.id}
                        >

                            <h2>FineDine</h2>

                            <h3>Table Reservation</h3>

                            <div className="reservation-divider"></div>

                            <div className="reservation-item">

                                <FaCalendarAlt className="reservation-icon"/>

                                <div>

                                    <span>Date</span>

                                    <h4>{formatDate(reservation.reservationDate)}</h4>

                                </div>

                            </div>

                            <div className="reservation-item">

                                <FaClock className="reservation-icon"/>

                                <div>

                                    <span>Time</span>

                                    <h4>{formatTime(reservation.reservationTime)}</h4>

                                </div>

                            </div>

                            <div className="reservation-item">

                                <FaUsers className="reservation-icon"/>

                                <div>

                                    <span>Guests</span>

                                    <h4>{reservation.guests}</h4>

                                </div>

                            </div>

                            <div className="reservation-item">

                                <FaGlassCheers className="reservation-icon"/>

                                <div>

                                    <span>Occasion</span>

                                    <h4>{reservation.occasion}</h4>

                                </div>

                            </div>

                            <div className="reservation-item">

                                <FaChair className="reservation-icon"/>

                                <div>

                                    <span>Seating Preference</span>

                                    <h4>{reservation.seatingPreference}</h4>

                                </div>

                            </div>

                            <div className="reservation-item">

                                <FaStickyNote className="reservation-icon"/>

                                <div>

                                    <span>Special Requests</span>

                                    <h4>
                                        {reservation.specialRequests || "None"}
                                    </h4>

                                </div>

                            </div>

                            <div className="reservation-divider"></div>

                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#DCCA87",
                                    marginBottom: "1.5rem",
                                    fontStyle: "italic"
                                }}
                            >
                                We look forward to serving you.
                            </p>

                            <button
                                className="cancel-btn"
                                onClick={() => handleCancel(reservation.id)}
                            >
                                Cancel Reservation
                            </button>

                        </div>

                    ))

                )}

            </div>

        </section>

    );
};

export default MyReservations;