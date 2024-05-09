package com.yukesh.mcm.mapper;

import com.yukesh.mcm.dto.CourseDto;
import com.yukesh.mcm.entity.Course;

public class CourseMapper {

    public static CourseDto mapToCourseDto(Course course)
    {
        return new CourseDto(
                course.getId(),
                course.getCourseName(),
                course.getDuration(),
                course.getTeacher()
        );
    }

    public static Course mapToCourse(CourseDto courseDto)
    {
        return new Course(
                courseDto.getId(),
                courseDto.getCourseName(),
                courseDto.getDuration(),
                courseDto.getTeacher()
        );
    }

}
