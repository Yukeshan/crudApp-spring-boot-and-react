package com.yukesh.mcm.service.impl;

import com.yukesh.mcm.dto.CourseDto;
import com.yukesh.mcm.entity.Course;
import com.yukesh.mcm.entity.Teacher;
import com.yukesh.mcm.exception.ResourceNotFoundException;
import com.yukesh.mcm.mapper.CourseMapper;
import com.yukesh.mcm.mapper.TeacherMapper;
import com.yukesh.mcm.repository.CourseRepository;
import com.yukesh.mcm.service.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class CourseServiceImpl implements CourseService {
    private CourseRepository courseRepository;
    @Override
    public CourseDto createCourse(CourseDto courseDto) {

        Course course = CourseMapper.mapToCourse(courseDto);
        Course savedCourse = courseRepository.save(course);

        return CourseMapper.mapToCourseDto(savedCourse);
    }

    @Override
    public CourseDto getCourseById(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(()->new ResourceNotFoundException("Teacher is not exist with given id : " + courseId));

        return CourseMapper.mapToCourseDto(course);
    }

    @Override
    public List<CourseDto> getAllCourses() {
        List<Course> courses = courseRepository.findAll();

        return courses.stream().map((course) -> CourseMapper.mapToCourseDto(course))
                .collect(Collectors.toList());
    }

    @Override
    public CourseDto updateCourse(Long courseId, CourseDto updatedCourse) {
        Course course = courseRepository.findById(courseId).orElseThrow(
                () -> new ResourceNotFoundException("Course is not found with given student ID : " + courseId)
        );

        course.setCourseName(updatedCourse.getCourseName());
        course.setDuration(updatedCourse.getDuration());
        course.setTeacher(updatedCourse.getTeacher());

        Course updatedCourseObj = courseRepository.save(course);

        return CourseMapper.mapToCourseDto(updatedCourseObj);
    }

    @Override
    public void deleteCourse(Long courseId) {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(()->new ResourceNotFoundException("Teacher is not exist with given id : " + courseId));

        courseRepository.deleteById(courseId);

    }
}
