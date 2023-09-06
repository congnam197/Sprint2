package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Product {
    @Id
    @Column(name = "id_product", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameProduct;
    private String descriptionProduct;
    private Double price;
    private Integer quantity;
    private Integer size;
    private String color;
    private String material;
    private String statusProduct;
    @ManyToOne
    @JoinColumn(name = "id_brand", nullable = false)
    private Brand brand;
    @ManyToOne
    @JoinColumn(name = "id_discount", nullable = false)
    private Discount discount;
    @ManyToOne
    @JoinColumn(name = "id_product_type", nullable = false)
    private ProductType productType;
    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderDetailList;
    @OneToMany(mappedBy = "product")
    private List<Image> images;
    @OneToMany(mappedBy = "product")
    private List<Cart> cartList;

    public Product(Integer id, String nameProduct, String descriptionProduct, Double price, Integer quantity, Integer size, String color, String material, String statusProduct, Brand brand, Discount discount, ProductType productType, List<OrderDetail> orderDetailList, List<Image> images, List<Cart> cartList) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.descriptionProduct = descriptionProduct;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.color = color;
        this.material = material;
        this.statusProduct = statusProduct;
        this.brand = brand;
        this.discount = discount;
        this.productType = productType;
        this.orderDetailList = orderDetailList;
        this.images = images;
        this.cartList = cartList;
    }

    public Product() {
    }

}
