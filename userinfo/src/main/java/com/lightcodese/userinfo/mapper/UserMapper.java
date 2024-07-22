package com.lightcodese.userinfo.mapper;

import com.lightcodese.userinfo.dto.UserDTO;
import com.lightcodese.userinfo.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO mapUserToUserDTO(User user);
    User mapUserDTOToUser(UserDTO userDTO);
}

