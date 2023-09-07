package com.example.demo.repository;

import com.example.demo.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {

    List<Product> findAll();
    List<Product> findAllByNameProductContaining(String name);
    List<Product> findProductByProductTypeId(Integer id);
    Product findProductById(Integer id);
    @Query(value = "select * from product order by price desc ",nativeQuery = true)
    List<Product> priceDesc();
    @Query(value = "select * from product order by price asc ",nativeQuery = true)
    List<Product> priceAsc();
    @Query(value = "select * from product order by name_product desc ",nativeQuery = true)
    List<Product> nameDesc();
    @Query(value = "select * from product order by name_product asc ",nativeQuery = true)
    List<Product> nameAsc();
}
