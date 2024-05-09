package com.yukesh.mcm.mapper;

import com.yukesh.mcm.dto.TeacherDto;
import com.yukesh.mcm.entity.Teacher;

public class TeacherMapper {

    public static TeacherDto mapToTeacherDto(Teacher teacher)
    {
        return new TeacherDto(
                teacher.getId(),
                teacher.getFirstName(),
                teacher.getLastName(),
                teacher.getEmail()
        );
    }

    public static Teacher mapToTeacher(TeacherDto teacherDto)
    {
        return new Teacher(
                teacherDto.getId(),
                teacherDto.getFirstName(),
                teacherDto.getLastName(),
                teacherDto.getEmail()
            );
    }

}
