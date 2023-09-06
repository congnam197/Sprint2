package com.example.demo.service.impl;

import com.example.demo.model.Account;
import com.example.demo.repository.IAccountRepository;
import com.example.demo.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository iAccountRepository;
    @Override
    public Optional<Account> findByEmail(String email) {
        return iAccountRepository.findByEmail(email);
    }

    @Override
    public Boolean existsAccountByEmail(String email) {
        return iAccountRepository.existsAccountByEmail(email);
    }

    @Override
    public Account save(Account account) {
        return iAccountRepository.save(account);
    }
}
