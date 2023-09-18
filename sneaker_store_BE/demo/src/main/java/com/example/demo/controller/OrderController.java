package com.example.demo.controller;

import com.example.demo.model.OrderDetail;
import com.example.demo.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user/order")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private IOrderDetailService orderDetailService;

    @GetMapping()
    public ResponseEntity<List<OrderDetail>> getOrderDetailByIdOder(@RequestParam("id") Integer idOrder) {

        List<OrderDetail> detailList = orderDetailService.findByOrder_Id(idOrder);
        if (detailList == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(detailList, HttpStatus.OK);
        }
    }
}
