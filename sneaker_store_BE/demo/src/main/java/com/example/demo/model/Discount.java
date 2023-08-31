package com.example.demo.model;

public class Discount {
    private Integer id;
    private Double percent;

    public Discount(Integer id, Double percent) {
        this.id = id;
        this.percent = percent;
    }

    public Discount() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPercent() {
        return percent;
    }

    public void setPercent(Double percent) {
        this.percent = percent;
    }
}
