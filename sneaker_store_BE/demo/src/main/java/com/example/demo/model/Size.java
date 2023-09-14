package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Size {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    private Integer size;


    public Size() {
    }

    public Size(Integer id, Integer size) {
        this.id = id;
        this.size = size;

    }

    public Integer getId() {
        return id;
    }

    public Integer getSize() {
        return size;
    }

}
