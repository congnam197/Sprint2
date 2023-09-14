package com.example.demo.service;

import com.example.demo.model.Account;
import com.example.demo.model.User;

import java.util.Optional;

public interface IAccountService {
    Optional<Account> findByEmail(String email);

    Boolean existsAccountByEmail(String email);
    Account save(Account account);

    void editUser(Account account);

    Account findById(Integer id);
    void saveNewPassword(Account account);
}
