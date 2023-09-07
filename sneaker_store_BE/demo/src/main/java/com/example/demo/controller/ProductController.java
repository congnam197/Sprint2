package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/public/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
   private IProductService iProductService;


    @GetMapping("/list")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(iProductService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable(name = "id") Integer id) {
        return new ResponseEntity<>(iProductService.findProductById(id), HttpStatus.OK);
    }

    @GetMapping("/sort")
    public ResponseEntity<List<Product>> findAndSort(@RequestParam(name = "code") String code) {
        List<Product> productList = new ArrayList<>();
        switch (code) {
            case "1": {
                productList = iProductService.nameAsc();
                break;
            }
            case "2": {
                productList = iProductService.nameDesc();
                break;
            }
            case "3": {
                productList = iProductService.priceAsc();
                break;
            }
            case "4": {
                productList = iProductService.priceDesc();
                break;
            }
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchByName(@RequestParam(name = "name") String name) {
        return new ResponseEntity<>(iProductService.findAllByNameProductContaining(name), HttpStatus.OK);
    }
}
