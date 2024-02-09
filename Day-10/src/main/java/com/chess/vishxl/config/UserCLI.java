package com.chess.vishxl.config;


import static com.chess.vishxl.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.chess.vishxl.model.User;
import com.chess.vishxl.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")

public class UserCLI implements CommandLineRunner{
    
    private final UserRepository UserRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public void run(String... args) throws Exception {
        if(UserRepository.count()>0)
            return;
            var user=User.builder()
                    .name("Admin")
                    .email("admin@gmail.com")
                    .password(passwordEncoder.encode("Admin@123"))
                    .role(ADMIN)
                    .build();
            UserRepository.save(user);
        
    }

}
