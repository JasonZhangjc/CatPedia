package com.jasonzjc.springbootbackend.controller;

import com.jasonzjc.springbootbackend.model.Cat;
import com.jasonzjc.springbootbackend.repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


//@Controller
@RestController
@RequestMapping("/api/v1/")
public class CatController {

    @Autowired
    private CatRepository catRepository;

    // get all cats
    @GetMapping("/cats")
    public List<Cat> getAllCats() {
        return catRepository.findAll();
    }
}
