package com.example.demo.controller;

import com.example.demo.model.Account;
import com.example.demo.model.Cart;
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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/shopping-cart")
//    @PreAuthorize("hasAnyAuthority('ROlE_USER')")
    public ResponseEntity<List<Cart>> getCartByUser(HttpServletRequest httpServletRequest){
        String header = httpServletRequest.getHeader("Authorization");
        String token = header.substring(7);
        String username = provider.getUserNameFromToken(token);
        Account account = iAccountService.findByEmail(username).get();
        List<Cart> cartList = iCartService.getAllByIdAccount(account.getId());
        if (cartList==null){
            return new ResponseEntity<>(null, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(cartList,HttpStatus.OK);
        }
    }
}
