package com.home.controller;


import com.home.dto.AddressDTO;
import com.home.service.AddressService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    // Add a new address for a user
    @PostMapping("/user/{userId}")
    public ResponseEntity<?> addAddressForUser(@PathVariable Long userId, @RequestBody AddressDTO addressDTO) {
        try {
            AddressDTO newAddress = addressService.addAddressForUser(userId, addressDTO);
            return ResponseEntity.ok(newAddress);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to add address: " + e.getMessage());
        }
    }

    // Update an existing address
    @PutMapping("/{addressId}")
    public ResponseEntity<?> updateAddress(@PathVariable Long addressId, @RequestBody AddressDTO addressDTO) {
        try {
            AddressDTO updatedAddress = addressService.updateAddress(addressId, addressDTO);
            return ResponseEntity.ok(updatedAddress);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to update address: " + e.getMessage());
        }
    }
    
 // Retrieve all addresses for a specific user
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getAddressesByUserId(@PathVariable Long userId) {
        try {
            List<AddressDTO> addresses = addressService.getAddressesByUserId(userId);
            if (addresses.isEmpty()) {
                return ResponseEntity.noContent().build(); // No content if no addresses found
            }
            return ResponseEntity.ok(addresses);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to retrieve addresses: " + e.getMessage());
        }
    }
}
