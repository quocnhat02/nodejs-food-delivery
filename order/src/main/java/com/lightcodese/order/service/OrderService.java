package com.lightcodese.order.service;

import com.lightcodese.order.dto.OrderDTO;
import com.lightcodese.order.dto.OrderDTOFromFE;
import com.lightcodese.order.dto.UserDTO;
import com.lightcodese.order.entity.Order;
import com.lightcodese.order.mapper.OrderMapper;
import com.lightcodese.order.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;

    @Autowired
    SequenceGenerator sequenceGenerator;

    @Autowired
    RestTemplate restTemplate;

    // TODO: Service create a new order
    public OrderDTO postNewOrder(OrderDTOFromFE orderDTOFromFE) {
        Integer newOrderId = sequenceGenerator.generateNextOrderId();
        UserDTO userDTO = getUserByIdMS(orderDTOFromFE.getUserId());
        Order order = new Order(newOrderId, orderDTOFromFE.getFoodItemDTOList(), orderDTOFromFE.getRestaurant(), userDTO);
        orderRepo.save(order);
        return OrderMapper.INSTANCE.mapOrderToOrderDTO(order);
    }

    public UserDTO getUserByIdMS(Integer userId) {
        return restTemplate.getForObject("http://USER-SERVICE/users/get-single-by-id/" + userId, UserDTO.class);
    }
}
