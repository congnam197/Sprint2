package com.example.demo.service;

import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductService {
    List<Product> findAll();
    List<Product> findAllByNameProductContaining(String name);
    List<Product> findProductByProductTypeId(Integer id);
    Product findProductById(Integer id);

    List<Product> priceDesc();

    List<Product> priceAsc();

    List<Product> nameDesc();

    List<Product> nameAsc();
}
