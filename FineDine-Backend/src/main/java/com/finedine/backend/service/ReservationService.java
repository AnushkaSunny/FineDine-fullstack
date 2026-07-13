package com.finedine.backend.service;

import com.finedine.backend.dto.ReservationRequest;
import com.finedine.backend.dto.ReservationResponse;

import java.util.List;

public interface ReservationService {

    ReservationResponse createReservation(ReservationRequest request);

    List<ReservationResponse> getAllReservations();

    List<ReservationResponse> getReservationsByEmail(String email);

    ReservationResponse getReservationById(Long id);

    void deleteReservation(Long id);
}