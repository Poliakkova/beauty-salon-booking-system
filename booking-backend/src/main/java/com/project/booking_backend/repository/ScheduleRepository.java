package com.project.booking_backend.repository;

import com.project.booking_backend.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository <Schedule, Long> {
}
