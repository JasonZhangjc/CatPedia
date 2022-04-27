package com.jasonzjc.springbootbackend.repository;

import com.jasonzjc.springbootbackend.model.Cat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatRepository extends JpaRepository<Cat, Long> {
}
