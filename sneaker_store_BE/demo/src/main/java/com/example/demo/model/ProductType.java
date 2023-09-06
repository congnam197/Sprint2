package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "product_type")
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product_type",nullable = false)
    private Integer id;
    private String productType;
    @OneToMany(mappedBy = "productType")
    private List<Product> productList;

    public ProductType(Integer id, String productType) {
        this.id = id;
        this.productType = productType;
    }

    public ProductType(Integer id, String productType, List<Product> productList) {
        this.id = id;
        this.productType = productType;
        this.productList = productList;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
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
