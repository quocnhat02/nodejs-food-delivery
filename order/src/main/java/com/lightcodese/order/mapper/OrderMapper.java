package com.lightcodese.order.mapper;

import com.lightcodese.order.dto.OrderDTO;
import com.lightcodese.order.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    Order mapOrderDtoToOrder(OrderDTO orderDto);
    OrderDTO mapOrderToOrderDTO(Order order);
}
