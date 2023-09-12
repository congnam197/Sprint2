package com.example.demo.service;

import com.example.demo.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    List<Product> findProductSale(Integer page);
    List<Product> findProductHome();
    Page<Product> findAllByNameProductContaining(String name,Pageable pageable);
    List<Product> findProductByProductTypeId(Integer id);
    Product findProductById(Integer id);

    List<Product> priceDesc();

    List<Product> priceAsc();

    List<Product> nameDesc();

    List<Product> nameAsc();
    Page<Product> findProduct(Pageable pageable,String name, Integer id);
    List<Product> findFirst4ByBrand_Id(Integer id);

    List<Product> findProductByIdBrand(Integer id, Integer page);
}
