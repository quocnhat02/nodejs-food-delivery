package com.lightcodese.userinfo.controller;

import com.lightcodese.userinfo.dto.UserDTO;
import com.lightcodese.userinfo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/get-all")
    public ResponseEntity<List<UserDTO>> getUsers() {
        List<UserDTO> userDTOList = userService.getAllUsers();
        return new ResponseEntity<>(userDTOList, HttpStatus.OK);
    }

    @GetMapping("/get-single-by-id/{id}")
    public ResponseEntity<UserDTO> getSingleRestaurantById(@PathVariable Integer id) {
        return userService.getSingleUserById(id);
    }

    @PostMapping("/create")
    public ResponseEntity<UserDTO> postNewRestaurant(@RequestBody UserDTO userDTO) {
        UserDTO newUserDto = userService.postNewUser(userDTO);
        return new ResponseEntity<>(newUserDto, HttpStatus.CREATED);
    }
}
