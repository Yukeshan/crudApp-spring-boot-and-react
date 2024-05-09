package com.yukesh.mcm.controller;


import com.yukesh.mcm.dto.CourseDto;
import com.yukesh.mcm.dto.StudentDto;
import com.yukesh.mcm.dto.TeacherDto;
import com.yukesh.mcm.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    private TeacherService teacherService;

    //Build addTeacher REST API
    @PostMapping
    public ResponseEntity<TeacherDto> createTeacher(@RequestBody TeacherDto teacherDto)
    {
        TeacherDto savedTeacher = teacherService.createTeacher(teacherDto);
        return new ResponseEntity<>(savedTeacher, HttpStatus.CREATED);
    }

    //Build getTeacher REST API

    @GetMapping("{id}")
    public ResponseEntity<TeacherDto> getTeacherById(@PathVariable("id") Long teacherId)
    {
        TeacherDto teacherDto = teacherService.getTeacherById(teacherId);
        return ResponseEntity.ok(teacherDto);
    }


    //Build getAllTeachers REST API

    @GetMapping
    public ResponseEntity<List<TeacherDto>> getAllTeachers()
    {
        List<TeacherDto> teachers = teacherService.getAllTeachers();
        return ResponseEntity.ok(teachers);

    }

    //Build updateStudent REST API

    @PutMapping("{id}")
    public ResponseEntity<TeacherDto> updateTeacher(@PathVariable("id") Long teacherId,
                                                    @RequestBody TeacherDto updateTeacher)
    {
        TeacherDto teacherDto = teacherService.updateTeacher(teacherId,updateTeacher);
        return ResponseEntity.ok(teacherDto);
    }

    //Build deleteTeacher REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTeacher(@PathVariable("id") Long teacherId)
    {
        teacherService.deleteTeacher(teacherId);
        return ResponseEntity.ok("Teacher deleted successfully");
    }

}
