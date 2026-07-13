package com.finedine.backend.service.impl;

import com.finedine.backend.dto.ReservationRequest;
import com.finedine.backend.dto.ReservationResponse;
import com.finedine.backend.entity.Reservation;
import com.finedine.backend.repository.ReservationRepository;
import com.finedine.backend.service.ReservationService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;

    public ReservationServiceImpl(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    @Override
    public ReservationResponse createReservation(ReservationRequest request) {

        Reservation reservation = new Reservation();

        reservation.setReservationDate(request.getReservationDate());
        reservation.setReservationTime(request.getReservationTime());
        reservation.setGuests(request.getGuests());
        reservation.setOccasion(request.getOccasion());
        reservation.setSeatingPreference(request.getSeatingPreference());
        reservation.setSpecialRequests(request.getSpecialRequests());
        reservation.setCustomerName(request.getCustomerName());
        reservation.setCustomerEmail(request.getCustomerEmail());

        Reservation savedReservation = reservationRepository.save(reservation);

        return mapToResponse(savedReservation);
    }

    @Override
    public List<ReservationResponse> getAllReservations() {

        return reservationRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<ReservationResponse> getReservationsByEmail(String email) {

        return reservationRepository.findByCustomerEmail(email)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public ReservationResponse getReservationById(Long id) {

        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Reservation not found with id: " + id));

        return mapToResponse(reservation);
    }

    @Override
    public void deleteReservation(Long id) {

        if (!reservationRepository.existsById(id)) {
            throw new EntityNotFoundException("Reservation not found with id: " + id);
        }

        reservationRepository.deleteById(id);
    }

    private ReservationResponse mapToResponse(Reservation reservation) {

        return new ReservationResponse(
                reservation.getId(),
                reservation.getReservationDate(),
                reservation.getReservationTime(),
                reservation.getGuests(),
                reservation.getOccasion(),
                reservation.getSeatingPreference(),
                reservation.getSpecialRequests(),
                reservation.getCustomerName(),
                reservation.getCustomerEmail()
        );
    }
}