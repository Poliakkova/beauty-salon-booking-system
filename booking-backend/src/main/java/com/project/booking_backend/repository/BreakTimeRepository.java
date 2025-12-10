package com.project.booking_backend.repository;

import com.project.booking_backend.model.BreakTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BreakTimeRepository extends JpaRepository <BreakTime, Long> {
}
