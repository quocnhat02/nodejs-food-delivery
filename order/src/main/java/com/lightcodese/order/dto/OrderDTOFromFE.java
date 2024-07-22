package com.lightcodese.order.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTOFromFE {
    private List<FoodItemDTO> foodItemDTOList;
    private Integer userId;
    private Restaurant restaurant;
}
