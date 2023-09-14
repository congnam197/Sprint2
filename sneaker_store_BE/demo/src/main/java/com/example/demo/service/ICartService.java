package com.example.demo.service;

import com.example.demo.model.Account;
import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.model.User;

import java.util.List;

public interface ICartService {
    List<Cart> getAllByIdAccount(Integer id);

    void setCart(Integer index, Integer id);
    void createCart(Account account, Product product, Integer quantity);

    void deleteById(Integer id);

    void deleteByIdAccount(User user);

}
