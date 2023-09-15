package com.example.demo.service.impl;

import com.example.demo.model.Product;
import com.example.demo.repository.IProductRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> findProductSale(Integer page) {

        return iProductRepository.findProductSale(page);
    }

    @Override
    public List<Product> findProductHome() {
        return iProductRepository.findAllProductHome();
    }

    @Override
    public Page<Product> findAllByNameProductContaining(String name, Pageable pageable) {
        return iProductRepository.findAllByNameProductContaining(name, pageable);
    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return iProductRepository.findAll(pageable);
    }

    @Override
    public Page<Product> findProductByProductTypeId(Pageable pageable, Integer id) {
        return iProductRepository.findByProductType_Id(pageable, id);
    }

    @Override
    public Product findProductById(Integer id) {
        return iProductRepository.findProductById(id);
    }

    @Override
    public Page<Product> priceDesc(Pageable pageable) {
        return iProductRepository.priceDesc(pageable);
    }

    @Override
    public Page<Product> priceAsc(Pageable pageable) {
        return iProductRepository.priceAsc(pageable);
    }

    @Override
    public Page<Product> nameDesc(Pageable pageable) {
        return iProductRepository.nameDesc(pageable);
    }

    @Override
    public Page<Product> nameAsc(Pageable pageable) {
        return iProductRepository.nameAsc(pageable);
    }

    @Override
    public Page<Product> findProduct(Pageable pageable, String name, Integer id) {
        return iProductRepository.findProductByNameProductContainingAndBrand_Id(pageable, name, id);
    }

    @Override
    public List<Product> findByBrand_Id(Integer id) {
        return iProductRepository.findByBrand_Id(id);
    }

    @Override
    public List<Product> findProductByIdBrand(Integer id, Integer page) {
        return iProductRepository.findProductByIdBrand(id, page);
    }

    @Override
    public void updateQuantityProductById(int quantity, int idProduct) {
        iProductRepository.updateQuantityProductById(quantity, idProduct);
    }
}
