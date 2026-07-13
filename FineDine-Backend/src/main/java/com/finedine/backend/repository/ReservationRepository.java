package com.finedine.backend.repository;

import com.finedine.backend.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByCustomerEmail(String customerEmail);

}