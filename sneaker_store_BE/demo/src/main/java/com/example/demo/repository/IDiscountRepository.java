package com.example.demo.repository;

import com.example.demo.model.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDiscountRepository extends JpaRepository<Discount,Integer> {
}
