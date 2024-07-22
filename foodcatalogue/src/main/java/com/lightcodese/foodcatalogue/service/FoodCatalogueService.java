package com.lightcodese.foodcatalogue.service;

import com.lightcodese.foodcatalogue.dto.FoodCataloguePage;
import com.lightcodese.foodcatalogue.dto.FoodItemDTO;
import com.lightcodese.foodcatalogue.dto.Restaurant;
import com.lightcodese.foodcatalogue.entity.FoodItem;
import com.lightcodese.foodcatalogue.mapper.FoodItemMapper;
import com.lightcodese.foodcatalogue.repo.FoodItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodCatalogueService {
    @Autowired
    FoodItemRepo foodItemRepo;

    @Autowired
    RestTemplate restTemplate;

    // TODO: Service get all foods
    public List<FoodItemDTO> getAllFoods() {
        List<FoodItem> foodItems = foodItemRepo.findAll();
        List<FoodItemDTO> foodItemDTOList = foodItems.stream().map(food -> FoodItemMapper.INSTANCE.mapFoodItemToFoodItemDTO(food)).collect(Collectors.toList());
        return foodItemDTOList;
    }

    // TODO: Service get single food catalogue by restaurantId
    public FoodCataloguePage getSingleFoodCatalogueById(Integer restaurantId) {
        List<FoodItem> foodItems =  getAllFoodsByRestaurantId(restaurantId);
        Restaurant restaurant = getRestaurantByIdMS(restaurantId);
        return bindFoodCataloguePage(foodItems, restaurant);
    }

    private List<FoodItem> getAllFoodsByRestaurantId(Integer restaurantId) {
        return foodItemRepo.findByRestaurantId(restaurantId);
    }

    private Restaurant getRestaurantByIdMS(Integer restaurantId) {
        return restTemplate.getForObject("http://RESTAURANT-SERVICE/restaurants/get-single-by-id/" + restaurantId, Restaurant.class);
    }

    private FoodCataloguePage bindFoodCataloguePage(List<FoodItem> foodItems, Restaurant restaurant) {
        FoodCataloguePage foodCataloguePage = new FoodCataloguePage();
        foodCataloguePage.setFoodItems(foodItems);
        foodCataloguePage.setRestaurant(restaurant);
        return foodCataloguePage;
    }

    // TODO: Service create new food item
    public FoodItemDTO postNewRestaurant(FoodItemDTO foodItemDTO) {
        FoodItem foodItem = foodItemRepo.save(FoodItemMapper.INSTANCE.mapFoodItemDTOToFoodItem(foodItemDTO));
        return FoodItemMapper.INSTANCE.mapFoodItemToFoodItemDTO(foodItem);
    }
}
