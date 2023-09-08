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
    @ManyToMany(cascade = CascadeType.ALL)
            @JoinTable(name = "sizes_product",
            joinColumns = @JoinColumn(name = "size_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    @JsonManagedReference
    private Set<Product> productSet;
}
