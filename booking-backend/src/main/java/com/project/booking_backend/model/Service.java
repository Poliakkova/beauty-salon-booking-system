package com.project.booking_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String category;
    private String serviceName;
    private String descriptiion;
    private String duration;
    private String price;
    @OneToMany(mappedBy = "service", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MasterService> masterServices;
    @OneToMany(mappedBy = "service")
    private List<Appointment> appointments;
}
