package com.lightcodese.restaurantlisting.controller;

import com.lightcodese.restaurantlisting.dto.RestaurantDTO;
import com.lightcodese.restaurantlisting.entity.Restaurant;
import com.lightcodese.restaurantlisting.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/")
    public ResponseEntity<List<RestaurantDTO>> getAllRestaurants() {
        List<RestaurantDTO> restaurantDTOList = restaurantService.getAllRestaurants();
        return new ResponseEntity<>(restaurantDTOList, HttpStatus.OK);
    }
}
