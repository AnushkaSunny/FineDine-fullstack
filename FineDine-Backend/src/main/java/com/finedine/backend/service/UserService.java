package com.finedine.backend.service;

import com.finedine.backend.dto.AuthResponse;
import com.finedine.backend.dto.LoginRequest;
import com.finedine.backend.dto.RegisterRequest;

public interface UserService {

    AuthResponse registerUser(RegisterRequest registerRequest);

    AuthResponse loginUser(LoginRequest loginRequest);

}