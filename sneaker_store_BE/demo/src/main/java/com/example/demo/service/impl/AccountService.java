package com.example.demo.service.impl;

import com.example.demo.model.Account;
import com.example.demo.model.User;
import com.example.demo.repository.IAccountRepository;
import com.example.demo.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository iAccountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
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

    @Transactional
    @Override
    public void editUser(Account account) {
        iAccountRepository.save(account);
    }

    @Override
    public Account findById(Integer id) {
        return iAccountRepository.findById(id).get();
    }

    @Override
    public void saveNewPassword(Account account) {
        Account newAccount= findById(account.getId());
        String password= passwordEncoder.encode(account.getPassword());
        newAccount.setPassword(password);
        iAccountRepository.saveNewPassword(account.getId(),account.getPassword());
    }
}
