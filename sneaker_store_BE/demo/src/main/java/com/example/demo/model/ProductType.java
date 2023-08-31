package com.example.demo.model;

public class ProductType {
    private Integer id;
    private String productType;

    public ProductType(Integer id, String productType) {
        this.id = id;
        this.productType = productType;
    }

    public ProductType() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }
}
