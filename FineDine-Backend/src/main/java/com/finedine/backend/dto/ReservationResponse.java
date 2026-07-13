package com.finedine.backend.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class ReservationResponse {

    private Long id;
    private LocalDate reservationDate;
    private LocalTime reservationTime;
    private Integer guests;
    private String occasion;
    private String seatingPreference;
    private String specialRequests;
    private String customerName;
    private String customerEmail;

    public ReservationResponse() {
    }

    public ReservationResponse(Long id,
                               LocalDate reservationDate,
                               LocalTime reservationTime,
                               Integer guests,
                               String occasion,
                               String seatingPreference,
                               String specialRequests,
                               String customerName,
                               String customerEmail) {
        this.id = id;
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;
        this.guests = guests;
        this.occasion = occasion;
        this.seatingPreference = seatingPreference;
        this.specialRequests = specialRequests;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDate reservationDate) {
        this.reservationDate = reservationDate;
    }

    public LocalTime getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(LocalTime reservationTime) {
        this.reservationTime = reservationTime;
    }

    public Integer getGuests() {
        return guests;
    }

    public void setGuests(Integer guests) {
        this.guests = guests;
    }

    public String getOccasion() {
        return occasion;
    }

    public void setOccasion(String occasion) {
        this.occasion = occasion;
    }

    public String getSeatingPreference() {
        return seatingPreference;
    }

    public void setSeatingPreference(String seatingPreference) {
        this.seatingPreference = seatingPreference;
    }

    public String getSpecialRequests() {
        return specialRequests;
    }

    public void setSpecialRequests(String specialRequests) {
        this.specialRequests = specialRequests;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }
}