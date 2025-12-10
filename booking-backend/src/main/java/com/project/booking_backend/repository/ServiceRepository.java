package com.project.booking_backend.repository;

import com.project.booking_backend.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository <Service, Long> {
}
