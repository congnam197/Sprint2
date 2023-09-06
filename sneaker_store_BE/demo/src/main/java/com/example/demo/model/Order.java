package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_orders",nullable = false)
    private Integer id;
    private String dateOrder;
    private Boolean  statusOrder;
    @ManyToOne
    @JoinColumn(name = "id_user",nullable = false)
    private User user;

    @OneToMany(mappedBy = "orders")
    private List <OrderDetail> orderDetail;

    public Order(Integer id, String dateOrder, Boolean statusOrder, User user, List<OrderDetail> orderDetail) {
        this.id = id;
        this.dateOrder = dateOrder;
        this.statusOrder = statusOrder;
        this.user = user;
        this.orderDetail = orderDetail;
    }

    public Order() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(String dateOrder) {
        this.dateOrder = dateOrder;
    }

    public Boolean getStatusOrder() {
        return statusOrder;
    }

    public void setStatusOrder(Boolean statusOrder) {
        this.statusOrder = statusOrder;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<OrderDetail> getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(List<OrderDetail> orderDetail) {
        this.orderDetail = orderDetail;
    }
}
