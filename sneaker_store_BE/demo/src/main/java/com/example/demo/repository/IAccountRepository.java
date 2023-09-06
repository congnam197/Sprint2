package com.example.demo.repository;

import com.example.demo.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account,Integer> {
    Optional<Account> findByEmail(String email);

    Boolean existsAccountByEmail(String email);
}
