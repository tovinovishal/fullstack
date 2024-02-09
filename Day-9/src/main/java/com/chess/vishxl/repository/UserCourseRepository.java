package com.chess.vishxl.repository;

import com.chess.vishxl.model.UserCourse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCourseRepository extends JpaRepository<UserCourse, String> {
    // You can add custom query methods here if needed
}
