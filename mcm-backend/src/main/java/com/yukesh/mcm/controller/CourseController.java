package com.yukesh.mcm.controller;



import com.yukesh.mcm.dto.CourseDto;
import com.yukesh.mcm.dto.StudentDto;
import com.yukesh.mcm.dto.TeacherDto;
import com.yukesh.mcm.service.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private CourseService courseService;

    //Build addCourse REST API
    @PostMapping
    public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto)
    {
        CourseDto savedCourse = courseService.createCourse(courseDto);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    //Build getCourse REST API

    @GetMapping("{id}")
    public ResponseEntity<CourseDto> getCourseById(@PathVariable("id") Long courseId)
    {
        CourseDto courseDto = courseService.getCourseById(courseId);
        return ResponseEntity.ok(courseDto);
    }

    //Build getAllCourses REST API

    @GetMapping
    public ResponseEntity<List<CourseDto>> getAllCourses()
    {
        List<CourseDto> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);

    }

    //Build updateStudent REST API

    @PutMapping("{id}")
    public ResponseEntity<CourseDto> updateCourse(@PathVariable("id") Long courseId,
                                                    @RequestBody CourseDto updateCourse)
    {
        CourseDto courseDto = courseService.updateCourse(courseId,updateCourse);
        return ResponseEntity.ok(courseDto);
    }


    //Build deleteCourse REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId)
    {
        courseService.deleteCourse(courseId);
        return ResponseEntity.ok("Course deleted successfully");
    }


}
