package com.chess.vishxl.Service;

import com.chess.vishxl.dto.response.BasicResponse;
import com.chess.vishxl.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
