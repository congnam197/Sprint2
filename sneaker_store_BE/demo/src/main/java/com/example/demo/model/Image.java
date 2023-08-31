package com.example.demo.model;

public class Image {
    private Integer id;
    private String url;
    private Product product;

    public Image(Integer id, String url, Product product) {
        this.id = id;
        this.url = url;
        this.product = product;
    }

    public Image() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
