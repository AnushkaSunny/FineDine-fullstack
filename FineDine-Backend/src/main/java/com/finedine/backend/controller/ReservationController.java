package com.finedine.backend.controller;

import com.finedine.backend.dto.ReservationRequest;
import com.finedine.backend.dto.ReservationResponse;
import com.finedine.backend.service.ReservationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping
    public ResponseEntity<ReservationResponse> createReservation(
            @Valid @RequestBody ReservationRequest request) {

        ReservationResponse response =
                reservationService.createReservation(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ReservationResponse>> getAllReservations() {

        return ResponseEntity.ok(
                reservationService.getAllReservations()
        );
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<ReservationResponse>> getReservationsByEmail(
            @PathVariable String email) {

        return ResponseEntity.ok(
                reservationService.getReservationsByEmail(email)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservationResponse> getReservationById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                reservationService.getReservationById(id)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReservation(
            @PathVariable Long id) {

        reservationService.deleteReservation(id);

        return ResponseEntity.noContent().build();
    }
}