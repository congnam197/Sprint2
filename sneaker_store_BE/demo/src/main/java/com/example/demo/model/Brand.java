package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Brand {
    @Id
    @Column(name = "id_brand",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private String nameBrand;
    @OneToMany(mappedBy = "brand")
    private List<Product> products;

    public Brand(Integer id, String nameBrand, List<Product> products) {
        this.id = id;
        this.nameBrand = nameBrand;
        this.products = products;
    }

    public Brand() {
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameBrand() {
        return nameBrand;
    }

    public void setNameBrand(String nameBrand) {
        this.nameBrand = nameBrand;
    }
}
