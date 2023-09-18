package com.example.demo.service.impl;

import com.example.demo.model.Order;
import com.example.demo.repository.IOrderRepository;
import com.example.demo.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    public Order addOder(Order order) {
        order.setStatusOrder(false);
        return orderRepository.save(order);
    }
}
