package com.project.booking_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class MasterService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "master_id")
    private Master master;
    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;
    private Integer customPrice;
    private Integer customDuration;
}
