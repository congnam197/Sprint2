package com.example.demo.service;

import com.example.demo.model.Account;
import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartService {
    List<Cart> getAllByIdAccount(Integer id);

    void setCart(Integer index, Integer id);
    void createCart(Account account, Product product, Integer quantity);

    void deleteCartByIdProductAndAccount(Integer id,Account account);

    void deleteByIdAccount(Account account);

    Cart getQuantityProductByUser(Integer idAccount, Integer idProduct);

}
