package com.example.demo.service;

import com.example.demo.model.Account;
import com.example.demo.model.User;

public interface IUserService {
    User getUser(String uer);

    void createUser(User user);

}
