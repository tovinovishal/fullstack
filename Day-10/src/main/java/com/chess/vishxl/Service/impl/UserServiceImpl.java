package com.chess.vishxl.Service.impl;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.chess.vishxl.Service.UserService;
import com.chess.vishxl.dto.response.BasicResponse;
import com.chess.vishxl.dto.response.UserResponse;
import com.chess.vishxl.model.User;
import com.chess.vishxl.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream().map(user -> UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .image(user.getImage())
                .Address(user.getAddress())
                .phoneNumber(user.getPhoneNumber())
                .build())
                .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("User data fetched successfully!").data(userResponses).build();
    }

}
