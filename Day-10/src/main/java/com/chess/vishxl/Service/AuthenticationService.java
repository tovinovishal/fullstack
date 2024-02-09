package com.chess.vishxl.Service;

import com.chess.vishxl.dto.request.LoginRequest;
import com.chess.vishxl.dto.request.RegisterRequest;
import com.chess.vishxl.dto.response.LoginResponse;
import com.chess.vishxl.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register (RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
