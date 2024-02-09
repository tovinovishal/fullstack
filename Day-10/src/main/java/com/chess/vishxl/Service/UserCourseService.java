package com.chess.vishxl.Service;

import com.chess.vishxl.model.UserCourse;
import com.chess.vishxl.repository.UserCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserCourseService {

    @Autowired
    private UserCourseRepository userCourseRepository;

    public List<UserCourse> getAllUserCourses() {
        return userCourseRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<UserCourse> getUserCourseById(String id) {
        return userCourseRepository.findById(id);
    }

    @SuppressWarnings("null")
    public UserCourse saveUserCourse(UserCourse userCourse) {
        return userCourseRepository.save(userCourse);
    }

    @SuppressWarnings("null")
    public void deleteUserCourse(String id) {
        userCourseRepository.deleteById(id);
    }
}
