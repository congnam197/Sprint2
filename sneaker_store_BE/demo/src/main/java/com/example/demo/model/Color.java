package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Color {
    @Id
    @JoinColumn(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String color;
    private String code;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "colors_product",
            joinColumns = @JoinColumn(name = "color_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    @JsonManagedReference
    private Set<Product> products;

    public Color(Integer id, String color, Set<Product> products) {
        this.id = id;
        this.color = color;
        this.products = products;
    }

    public Color(Integer id, String color, String code, Set<Product> products) {
        this.id = id;
        this.color = color;
        this.code = code;
        this.products = products;
    }

    public Color() {
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}
