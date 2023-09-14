package com.example.demo.service.impl;

import com.example.demo.model.OrderDetail;
import com.example.demo.repository.IOrderDetailRepository;
import com.example.demo.service.IOrderDetailService;
import com.example.demo.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService  implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;
    @Override
    public void addOrderDetail(OrderDetail orderDetail) {
        iOrderDetailRepository.save(orderDetail);

    }
}
