package com.example.demo.controller;

import com.example.demo.model.Image;
import com.example.demo.model.Product;
import com.example.demo.service.IImageService;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    @Autowired
    private IImageService iImageService;


    @GetMapping("/home-list")
    public ResponseEntity<List<Product>> findAll() {
        return new ResponseEntity<>(iProductService.findProductHome(), HttpStatus.OK);
    }
    @GetMapping("/list-sale")
    public ResponseEntity<List<Product>> findAllSale(@RequestParam ("page") String page) {
        Integer number = Integer.parseInt(page);
        return new ResponseEntity<>(iProductService.findProductSale(number), HttpStatus.OK);
    }
    @GetMapping("image/{id}")
    public ResponseEntity<List<Image>> findImagesByproductId(@PathVariable("id") Integer id){
        return new ResponseEntity<>(iImageService.findImageByIdProduct(id),HttpStatus.OK);
    }
    @GetMapping("brand/{id}")
    public ResponseEntity<List<Product>> getProductByIdBrand(@PathVariable("id") Integer id){
        return new ResponseEntity<>(iProductService.findFirst4ByBrand_Id(id),HttpStatus.OK);
    }
    @GetMapping("all-brand/{id}/{page}")
    public ResponseEntity<List<Product>> getAllProductByIdBrand(@PathVariable("id") Integer id, @PathVariable("page") Integer page){
        return new ResponseEntity<>(iProductService.findProductByIdBrand(id,page),HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable("id") Integer id) {
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
    public ResponseEntity<Page<Product>> searchByName(@PageableDefault(size = 9) Pageable pageable, @RequestParam(name = "name") String name) {
        return new ResponseEntity<>(iProductService.findAllByNameProductContaining(name,pageable), HttpStatus.OK);
    }
}
