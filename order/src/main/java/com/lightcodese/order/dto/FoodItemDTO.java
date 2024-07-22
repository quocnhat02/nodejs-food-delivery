package com.lightcodese.order.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodItemDTO {
    private long id;
    private String name;
    private String description;
    private boolean isVeg;
    private long price;
    private Integer restaurantId;
    private Integer quantity;
}
