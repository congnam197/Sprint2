package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Product {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameProduct;
    @Column(columnDefinition = "longtext")
    private String descriptionProduct;
    private Double price;
    private Integer quantity;
    private  String dateImport;
    private String material;
    private Boolean statusProduct;
    private String imageMain;
    @ManyToOne
    @JoinColumn(name = "id_brand", nullable = false)
    private Brand brand;
    @ManyToOne
    @JoinColumn(name = "id_discount", nullable = false)
    private Discount discount;
    @ManyToOne
    @JoinColumn(name = "id_product_type", nullable = false)
    private ProductType productType;
    @ManyToMany(mappedBy = "productSet")
    @JsonManagedReference
    private Set<Size> sizeSet;
    @ManyToMany(mappedBy = "products")
    @JsonManagedReference
    private Set<Color> colors;

    public Product() {
    }

    public Product(Integer id, String nameProduct, String descriptionProduct, Double price, Integer quantity, String dateImport, String material, Boolean statusProduct, String imageMain, Brand brand, Discount discount, ProductType productType, Set<Size> sizeSet, Set<Color> colors) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.descriptionProduct = descriptionProduct;
        this.price = price;
        this.quantity = quantity;
        this.dateImport = dateImport;
        this.material = material;
        this.statusProduct = statusProduct;
        this.imageMain = imageMain;
        this.brand = brand;
        this.discount = discount;
        this.productType = productType;
        this.sizeSet = sizeSet;
        this.colors = colors;
    }

    public String getImageMain() {
        return imageMain;
    }

    public void setImageMain(String imageMain) {
        this.imageMain = imageMain;
    }

    public Set<Size> getSizeSet() {
        return sizeSet;
    }

    public void setSizeSet(Set<Size> sizeSet) {
        this.sizeSet = sizeSet;
    }

    public Set<Color> getColors() {
        return colors;
    }

    public void setColors(Set<Color> colors) {
        this.colors = colors;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDescriptionProduct() {
        return descriptionProduct;
    }

    public void setDescriptionProduct(String descriptionProduct) {
        this.descriptionProduct = descriptionProduct;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDateImport() {
        return dateImport;
    }

    public void setDateImport(String dateImport) {
        this.dateImport = dateImport;
    }


    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public Boolean getStatusProduct() {
        return statusProduct;
    }

    public void setStatusProduct(Boolean statusProduct) {
        this.statusProduct = statusProduct;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public Discount getDiscount() {
        return discount;
    }

    public void setDiscount(Discount discount) {
        this.discount = discount;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

}
