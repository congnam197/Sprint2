package com.example.demo.service.impl;

import com.example.demo.model.Account;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.IRoleRepository;
import com.example.demo.repository.IUserRepository;
import com.example.demo.service.IAccountService;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository iUserRepository;
    @Autowired
    private IAccountService iAccountService;
    @Autowired
    private IRoleRepository iRoleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User getUser(String email) {
        return iUserRepository.findByAccount_Email(email);
    }

    @Override
    public void createUser(User user) {
        Role role = iRoleRepository.findByRole("ROLE_USER").get();
        Account account = new Account();
        account.setRoleAccount((Set<Role>) role);
        String password = passwordEncoder.encode(user.getAccount().getPassword());
        account.setPassword(password);
        account.setEmail(user.getAccount().getEmail());
        iAccountService.save(account);
        user.setAccount(account);
        iUserRepository.save(user);
    }
}
