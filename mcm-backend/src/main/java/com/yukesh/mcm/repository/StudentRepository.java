package com.yukesh.mcm.repository;

import com.yukesh.mcm.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {
}
