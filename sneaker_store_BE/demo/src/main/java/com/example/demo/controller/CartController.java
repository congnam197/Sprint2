package com.example.demo.controller;

import com.example.demo.model.Account;
import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.security.jwt.JwtProvider;
import com.example.demo.service.IAccountService;
import com.example.demo.service.ICartService;
import com.example.demo.service.IProductService;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private ICartService iCartService;
    @Autowired
    private IProductService iProductService;
    @Autowired
    private IAccountService iAccountService;
    @Autowired
    private JwtProvider provider;

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @GetMapping("/shopping-cart")
    public ResponseEntity<List<Cart>> getCartByUser(HttpServletRequest httpServletRequest) {
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = provider.getUserNameFromToken(token);
        Account account = iAccountService.findByEmail(username).get();
        List<Cart> cartList = iCartService.getAllByIdAccount(account.getId());
        if (cartList == null) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(cartList, HttpStatus.OK);
        }
    }

    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @PostMapping("/add-to-cart/{idProduct}")
    public ResponseEntity<?> addProductToCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Account account = iAccountService.findByEmail(email).get();
        Product product = iProductService.findProductById(idProduct);
        iCartService.createCart(account, product, 1);
        return new ResponseEntity<>(HttpStatus.OK);

    }
    @PreAuthorize("hasRole('ROLE_USER')  or hasRole('ROLE_ADMIN')")
    @DeleteMapping ("/remove/{idProduct}")
    public ResponseEntity<?> deleteProductOnCart(@PathVariable int idProduct) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Account account = iAccountService.findByEmail(email).get();
        Product product = iProductService.findProductById(idProduct);
        try {
            iCartService.deleteCartByIdProductAndAccount(product.getId(),account);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
