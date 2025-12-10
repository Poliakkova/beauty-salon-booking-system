package com.project.booking_backend.repository;

import com.project.booking_backend.model.Master;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MasterRepository extends JpaRepository <Master, Long> {
}
