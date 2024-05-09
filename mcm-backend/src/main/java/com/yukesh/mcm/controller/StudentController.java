package com.yukesh.mcm.controller;


import com.yukesh.mcm.dto.StudentDto;
import com.yukesh.mcm.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private StudentService studentService;

    //Build addStudent REST API
    @PostMapping
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto)
    {
        StudentDto savedStudent = studentService.createStudent(studentDto);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    //Build getStudent REST API

    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studentId)
    {
        StudentDto studentDto = studentService.getStudentById(studentId);
        return ResponseEntity.ok(studentDto);
    }

    //Build getAllStudents REST API

    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents()
    {
        List<StudentDto> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);

    }


    //Build updateStudent REST API

    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long studentId,
                                                    @RequestBody StudentDto updatedStudent)
    {
        StudentDto studentDto = studentService.updateStudent(studentId,updatedStudent);
        return ResponseEntity.ok(studentDto);
    }

    //Build deleteStudent REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId)
    {
        studentService.deleteStudent(studentId);
        return ResponseEntity.ok("Student deleted successfully");
    }



}
