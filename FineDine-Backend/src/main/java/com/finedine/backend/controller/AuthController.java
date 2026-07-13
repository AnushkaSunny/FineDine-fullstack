package com.finedine.backend.controller;

import com.finedine.backend.dto.AuthResponse;
import com.finedine.backend.dto.LoginRequest;
import com.finedine.backend.dto.RegisterRequest;
import com.finedine.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public AuthResponse registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        return userService.registerUser(registerRequest);
    }

    @PostMapping("/login")
    public AuthResponse loginUser(@Valid @RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }
}