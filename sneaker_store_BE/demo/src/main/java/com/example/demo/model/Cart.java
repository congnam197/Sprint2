package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Cart {
    @Id
    @Column(name = "id_cart",nullable = false)
    private  Integer id;
    private  Integer quantity;
    @ManyToOne
    @JoinColumn(name = "id_product",nullable = false)
    private Product product;
    @OneToOne
    @JoinColumn(name = "id_user",nullable = false)
    private User user;

    public Cart(Integer id, Integer quantity, Product product, User user) {
        this.id = id;
        this.quantity = quantity;
        this.product = product;
        this.user = user;
    }

    public Cart() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
