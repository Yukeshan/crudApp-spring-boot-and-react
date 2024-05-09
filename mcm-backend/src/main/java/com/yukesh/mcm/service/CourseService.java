package com.yukesh.mcm.service;

import com.yukesh.mcm.dto.CourseDto;
import com.yukesh.mcm.dto.StudentDto;
import com.yukesh.mcm.dto.TeacherDto;

import java.util.List;

public interface CourseService {
    CourseDto createCourse(CourseDto courseDto);

    CourseDto getCourseById(Long courseId);

    List<CourseDto> getAllCourses();

    CourseDto updateCourse(Long courseId,CourseDto updatedCourse);

    void deleteCourse(Long courseId);

}
