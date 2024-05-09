package com.yukesh.mcm.service;

import com.yukesh.mcm.dto.StudentDto;
import com.yukesh.mcm.entity.Student;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);

    StudentDto getStudentById(Long studentId);

    List<StudentDto> getAllStudents();

    StudentDto updateStudent(Long studentId, StudentDto updatedStudent);

    void deleteStudent(Long studentId);


}
