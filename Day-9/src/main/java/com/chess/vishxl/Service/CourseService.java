package com.chess.vishxl.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chess.vishxl.model.Course;
import com.chess.vishxl.repository.CourseRepository;

@Service
public class CourseService {

    private final CourseRepository courseRepository;
    

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }
    

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<Course> getCourseById(String id) {
        return courseRepository.findById(id);
    }

    @SuppressWarnings("null")
    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    @SuppressWarnings("null")
    public void deleteCourseById(String id) {
        courseRepository.deleteById(id);
    }
}
