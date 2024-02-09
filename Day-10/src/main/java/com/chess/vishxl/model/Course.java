package com.chess.vishxl.model;

import static jakarta.persistence.GenerationType.UUID;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = UUID)
    @Column(name = "course_id")
    private @Nullable String id;

    @Column(nullable = false)
    private @NotNull String coursename;

    @Column(nullable = false)
    private @NotNull String content;

}
