package com.yukesh.mcm.service;

import com.yukesh.mcm.dto.StudentDto;
import com.yukesh.mcm.dto.TeacherDto;

import java.util.List;

public interface TeacherService {
    TeacherDto createTeacher(TeacherDto teacherDto);

    TeacherDto getTeacherById(Long teacherId);

    List<TeacherDto> getAllTeachers();

    TeacherDto updateTeacher(Long teacherId,TeacherDto updatedTeacher);

    void deleteTeacher(Long teacherId);

}
