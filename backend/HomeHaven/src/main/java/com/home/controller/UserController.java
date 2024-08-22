package com.home.controller;


// src/main/java/com/yourapp/controller/UserController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.home.customexception.InvalidCredentialsException;
import com.home.customexception.UserNotFoundException;
import com.home.dto.LoginResponse;
import com.home.enums.AdminStatus;
import com.home.globalexception.GlobalException;
import com.home.model.User;
import com.home.service.UserService;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User newUser = userService.registerUser(user);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            // Handle specific exceptions if needed
            return ResponseEntity.badRequest().body("Registration failed. Please try again.");
        }
    }
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User user) {
        try {
            System.out.println("Request");
            User authenticatedUser = userService.authenticate(user.getEmail(), user.getPassword());
            AdminStatus adminStatus = authenticatedUser.getAdmin();
            LoginResponse response = new LoginResponse(authenticatedUser.getId(), adminStatus);
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        } catch (InvalidCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

}
/*try {
    User user = userService.authenticate(email, password);
    return ResponseEntity.ok(user);
} catch (UserNotFoundException | InvalidCredentialsException e) {
	return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Hello");
        }
    }
//return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
*/