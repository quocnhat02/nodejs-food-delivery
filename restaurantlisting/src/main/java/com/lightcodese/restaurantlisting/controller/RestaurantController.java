package com.lightcodese.restaurantlisting.controller;

import com.lightcodese.restaurantlisting.dto.RestaurantDTO;
import com.lightcodese.restaurantlisting.entity.Restaurant;
import com.lightcodese.restaurantlisting.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/get-all")
    public ResponseEntity<List<RestaurantDTO>> getAllRestaurants() {
        List<RestaurantDTO> restaurantDTOList = restaurantService.getAllRestaurants();
        return new ResponseEntity<>(restaurantDTOList, HttpStatus.OK);
    }

    @GetMapping("/get-single-by-id/{id}")
    public ResponseEntity<RestaurantDTO> getSingleRestaurantById(@PathVariable Integer id) {
        return restaurantService.getSingleRestaurantById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<RestaurantDTO> postNewRestaurant(@RequestBody RestaurantDTO restaurantDTO) {
        RestaurantDTO newRestaurantDTO = restaurantService.postNewRestaurant(restaurantDTO);
        return new ResponseEntity<>(newRestaurantDTO, HttpStatus.CREATED);
    }
}
