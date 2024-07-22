package com.lightcodese.order.controller;

import com.lightcodese.order.dto.OrderDTO;
import com.lightcodese.order.dto.OrderDTOFromFE;
import com.lightcodese.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<OrderDTO> postNewOrder(@RequestBody OrderDTOFromFE orderDTOFromFE) {
        OrderDTO orderDTO = orderService.postNewOrder(orderDTOFromFE);
        return new ResponseEntity<>(orderDTO, HttpStatus.OK);
    }
}
