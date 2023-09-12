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
    public Page<Product> findAllByNameProductContaining(String name,Pageable pageable) {
        return iProductRepository.findAllByNameProductContaining(name,pageable);
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

    @Override
    public Page<Product> findProduct(Pageable pageable, String name, Integer id) {
        return iProductRepository.findProductByNameProductContainingAndBrand_Id(pageable,name,id);
    }

    @Override
    public List<Product> findFirst4ByBrand_Id(Integer id) {
        return iProductRepository.findFirst4ByBrand_Id(id);
    }

    @Override
    public List<Product> findProductByIdBrand(Integer id, Integer page) {
        return iProductRepository.findProductByIdBrand(id, page);
    }


}
