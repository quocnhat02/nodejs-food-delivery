package com.lightcodese.userinfo.service;

import com.lightcodese.userinfo.dto.UserDTO;
import com.lightcodese.userinfo.entity.User;
import com.lightcodese.userinfo.mapper.UserMapper;
import com.lightcodese.userinfo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepo.findAll();
        List<UserDTO> userDTOList = users.stream().map(user -> UserMapper.INSTANCE.mapUserToUserDTO(user)).collect(Collectors.toList());
        return userDTOList;
    }

    public ResponseEntity<UserDTO> getSingleUserById(Integer id) {
        Optional<User> user = userRepo.findById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(UserMapper.INSTANCE.mapUserToUserDTO(user.get()), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    public UserDTO postNewUser(UserDTO userDTO) {
        User user = userRepo.save(UserMapper.INSTANCE.mapUserDTOToUser(userDTO));
        return UserMapper.INSTANCE.mapUserToUserDTO(user);
    }
}
