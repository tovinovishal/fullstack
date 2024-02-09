package com.chess.vishxl.Controller;

import com.chess.vishxl.model.UserCourse;
import com.chess.vishxl.Service.UserCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usercourses")
public class UserCourseController {

    @Autowired
    private UserCourseService userCourseService;

    @GetMapping
    public List<UserCourse> getAllUserCourses() {
        return userCourseService.getAllUserCourses();
    }

    @GetMapping("/{id}")
    public Optional<UserCourse> getUserCourseById(@PathVariable String id) {
        return userCourseService.getUserCourseById(id);
    }

    @PostMapping
    public UserCourse saveUserCourse(@RequestBody UserCourse userCourse) {
        return userCourseService.saveUserCourse(userCourse);
    }

    @DeleteMapping("/{id}")
    public void deleteUserCourse(@PathVariable String id) {
        userCourseService.deleteUserCourse(id);
    }
}
