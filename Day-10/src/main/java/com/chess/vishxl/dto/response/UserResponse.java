package com.chess.vishxl.dto.response;



import com.chess.vishxl.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private String id;
    private String name;
    private String email;
    private Role role;
    private String image;
    private Long phoneNumber;
    private String Address;

}
