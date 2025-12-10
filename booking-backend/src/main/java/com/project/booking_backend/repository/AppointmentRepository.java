package com.project.booking_backend.repository;

import com.project.booking_backend.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository <Appointment, Long> {
}
