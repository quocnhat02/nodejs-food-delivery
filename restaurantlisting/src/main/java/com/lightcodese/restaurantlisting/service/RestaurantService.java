package com.lightcodese.restaurantlisting.service;

import com.lightcodese.restaurantlisting.dto.RestaurantDTO;
import com.lightcodese.restaurantlisting.entity.Restaurant;
import com.lightcodese.restaurantlisting.repo.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    RestaurantRepo restaurantRepo;

    public List<RestaurantDTO> getAllRestaurants() {
        List<Restaurant> restaurants = restaurantRepo.findAll();

    }
}
