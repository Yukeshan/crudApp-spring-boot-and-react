package com.yukesh.mcm.service.impl;

import com.yukesh.mcm.dto.StudentDto;
import com.yukesh.mcm.entity.Student;
import com.yukesh.mcm.exception.ResourceNotFoundException;
import com.yukesh.mcm.mapper.StudentMapper;
import com.yukesh.mcm.repository.StudentRepository;
import com.yukesh.mcm.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);


    }

    @Override
    public StudentDto getStudentById(Long studentId) {

        Student student = studentRepository.findById(studentId)
        .orElseThrow(()->new ResourceNotFoundException("Student is not exist with given id : " + studentId));

        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {

        List<Student> students = studentRepository.findAll();

        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student))
                .collect(Collectors.toList());

    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {

        Student student = studentRepository.findById(studentId).orElseThrow(
                () -> new ResourceNotFoundException("Student is not found with given student ID : " + studentId)
        );

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());

        Student updatedStudentObj = studentRepository.save(student);



        return StudentMapper.mapToStudentDto(updatedStudentObj);
    }

    @Override
    public void deleteStudent(Long studentId) {

        Student student = studentRepository.findById(studentId)
                .orElseThrow(()->new ResourceNotFoundException("Student is not exist with given id : " + studentId));

        studentRepository.deleteById(studentId);

    }
}
