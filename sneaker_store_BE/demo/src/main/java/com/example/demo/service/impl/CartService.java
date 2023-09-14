package com.example.demo.service.impl;

import com.example.demo.model.Account;
import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.repository.ICartRepository;
import com.example.demo.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public List<Cart> getAllByIdAccount(Integer id) {
        return iCartRepository.findAllByAccount_Id(id);
    }

    @Override
    public void setCart(Integer index, Integer id) {
        Cart shoppingCart = iCartRepository.findById(id).get();
        if (index == 0) {
            shoppingCart.setQuantity(shoppingCart.getQuantity() - 1);
            iCartRepository.save(shoppingCart);
        } else {
            shoppingCart.setQuantity(shoppingCart.getQuantity() + 1);
            iCartRepository.save(shoppingCart);
        }
    }

    @Override
    public void createCart(Account account, Product product, Integer quantity) {
        Cart shoppingCart = iCartRepository.getCartToCreate(product.getId(), account.getId());
        if (shoppingCart == null) {
            Cart newShoppingCart = new Cart();
            newShoppingCart.setQuantity(quantity);
            newShoppingCart.setAccount(account);
            newShoppingCart.setProduct(product);
            iCartRepository.save(newShoppingCart);
        } else {
            shoppingCart.setQuantity(shoppingCart.getQuantity() + quantity);
            iCartRepository.save(shoppingCart);
        }
    }

    @Override
    public void deleteCartByIdProductAndAccount(Integer id, Account account) {
        iCartRepository.deleteProduct(id, account.getId());
    }

    @Override
    public void deleteByIdAccount(Account account) {
        iCartRepository.deleteCartByIdAccount(account.getId());
    }

    @Override
    public Cart getQuantityProductByUser(Integer idAccount, Integer idProduct) {
        return iCartRepository.getQuantityProductByUser(idAccount, idProduct);
    }

}
