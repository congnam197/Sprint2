package com.example.demo.model;

public class Brand {
    private  Integer id;
    private String nameBrand;

    public Brand(Integer id, String nameBrand) {
        this.id = id;
        this.nameBrand = nameBrand;
    }

    public Brand() {
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
