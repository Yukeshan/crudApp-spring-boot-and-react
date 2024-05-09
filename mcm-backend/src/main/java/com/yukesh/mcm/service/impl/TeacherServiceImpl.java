package com.yukesh.mcm.service.impl;

import com.yukesh.mcm.dto.TeacherDto;
import com.yukesh.mcm.entity.Student;
import com.yukesh.mcm.entity.Teacher;
import com.yukesh.mcm.exception.ResourceNotFoundException;
import com.yukesh.mcm.mapper.StudentMapper;
import com.yukesh.mcm.mapper.TeacherMapper;
import com.yukesh.mcm.repository.TeacherRepository;
import com.yukesh.mcm.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class TeacherServiceImpl implements TeacherService {

    private TeacherRepository teacherRepository;
    @Override
    public TeacherDto createTeacher(TeacherDto teacherDto) {

        Teacher teacher = TeacherMapper.mapToTeacher(teacherDto);
        Teacher savedTeacher = teacherRepository.save(teacher);

        return TeacherMapper.mapToTeacherDto(savedTeacher);
    }

    @Override
    public TeacherDto getTeacherById(Long teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(()->new ResourceNotFoundException("Teacher is not exist with given id : " + teacherId));

        return TeacherMapper.mapToTeacherDto(teacher);
    }

    @Override
    public List<TeacherDto> getAllTeachers() {

        List<Teacher> teachers = teacherRepository.findAll();

        return teachers.stream().map((teacher) -> TeacherMapper.mapToTeacherDto(teacher))
                .collect(Collectors.toList());
    }

    @Override
    public TeacherDto updateTeacher(Long teacherId, TeacherDto updatedTeacher) {
        Teacher teacher = teacherRepository.findById(teacherId).orElseThrow(
                () -> new ResourceNotFoundException("Teacher is not found with given student ID : " + teacherId)
        );

        teacher.setFirstName(updatedTeacher.getFirstName());
        teacher.setLastName(updatedTeacher.getLastName());
        teacher.setEmail(updatedTeacher.getEmail());

        Teacher updatedTeacherObj = teacherRepository.save(teacher);

        return TeacherMapper.mapToTeacherDto(updatedTeacherObj);
    }

    @Override
    public void deleteTeacher(Long teacherId) {

        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(()->new ResourceNotFoundException("Teacher is not exist with given id : " + teacherId));

        teacherRepository.deleteById(teacherId);

    }




}
