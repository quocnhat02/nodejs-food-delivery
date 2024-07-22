package com.lightcodese.foodcatalogue.controller;

import com.lightcodese.foodcatalogue.dto.FoodCataloguePage;
import com.lightcodese.foodcatalogue.dto.FoodItemDTO;
import com.lightcodese.foodcatalogue.service.FoodCatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food-catalogues")
public class FoodCatalogueController {
    @Autowired
    FoodCatalogueService foodCatalogueService;

    @GetMapping("/get-all")
    public ResponseEntity<List<FoodItemDTO>> getAllFoods() {
        List<FoodItemDTO> foodItemDTOList = foodCatalogueService.getAllFoods();
        return new ResponseEntity<>(foodItemDTOList, HttpStatus.OK);
    }

    @GetMapping("/get-single-food-catalogue-by-id/{restaurantId}")
    public ResponseEntity<FoodCataloguePage> getSingleFoodById(@PathVariable Integer restaurantId) {
        FoodCataloguePage foodCataloguePage = foodCatalogueService.getSingleFoodCatalogueById(restaurantId);
        return new ResponseEntity<>(foodCataloguePage, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<FoodItemDTO> postNewFood(@RequestBody FoodItemDTO foodItemDTO) {
        FoodItemDTO newFoodDTO = foodCatalogueService.postNewRestaurant(foodItemDTO);
        return new ResponseEntity<>(newFoodDTO, HttpStatus.CREATED);
    }
}
