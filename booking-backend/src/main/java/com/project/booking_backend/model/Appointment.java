package com.project.booking_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime start_at;
    private LocalDateTime end_at;
    private String status;
    @ManyToOne
    @JoinColumn(name = "client_id", nullable = true)
    private User client;
    private String clientSnapshot;
    @ManyToOne
    @JoinColumn(name = "master_id", nullable = true)
    private Master master;
    private String masterSnapshot;
    @ManyToOne
    @JoinColumn(name = "service_id", nullable = true)
    private Service service;
    private String serviceSnapshot;
}
