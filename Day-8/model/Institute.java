package com.chess.vishxl.model;

import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "inst")
public class Institute {
    @Id
    @GeneratedValue(strategy = UUID)
    private String institutename;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private long contact;
    

}
