package com.example.demo.service;

import com.example.demo.model.Account;

import java.util.Optional;

public interface IAccountService {
    Optional<Account> findByEmail(String email);

    Boolean existsAccountByEmail(String email);
    Account save(Account account);
}
