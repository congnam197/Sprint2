package com.example.demo.model;

public class OrderDetail {
    private Integer id;
    private Integer quantity;
    private  Product product;
    private Order order;

    public OrderDetail(Integer id, Integer quantity, Product product, Order order) {
        this.id = id;
        this.quantity = quantity;
        this.product = product;
        this.order = order;
    }

    public OrderDetail(Integer id, Integer quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    public OrderDetail() {
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

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
