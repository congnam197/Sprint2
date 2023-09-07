package com.example.demo.service.impl;

import com.example.demo.model.Product;
import com.example.demo.repository.IProductRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public List<Product> findAllByNameProductContaining(String name) {
        return iProductRepository.findAllByNameProductContaining(name);
    }

    @Override
    public List<Product> findProductByProductTypeId(Integer id) {
        return iProductRepository.findProductByProductTypeId(id);
    }

    @Override
    public Product findProductById(Integer id) {
        return iProductRepository.findProductById(id);
    }

    @Override
    public List<Product> priceDesc() {
        return iProductRepository.priceDesc();
    }

    @Override
    public List<Product> priceAsc() {
        return iProductRepository.priceAsc();
    }

    @Override
    public List<Product> nameDesc() {
        return iProductRepository.nameDesc();
    }

    @Override
    public List<Product> nameAsc() {
        return iProductRepository.nameAsc();
    }
}
