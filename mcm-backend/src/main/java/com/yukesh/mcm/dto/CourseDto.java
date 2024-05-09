package com.yukesh.mcm.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CourseDto {

    private Long id;
    private String courseName;
    private String duration;
    private String teacher;

}
