package com.home.controller;

import com.home.customexception.ResourceNotFoundException;
import com.home.dto.CartDTO;
import com.home.dto.CartProductDTO;
import com.home.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<CartDTO> getCartByUserId(@PathVariable Long userId) {
        try {
            CartDTO cartDTO = cartService.getCartByUserId(userId);
            return ResponseEntity.ok(cartDTO);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/user/{userId}/products")
    public ResponseEntity<CartDTO> addProductToCart(@PathVariable Long userId,
                                                    @RequestBody CartProductDTO cartProductDTO) {
        try {
            CartDTO cartDTO = cartService.addProductToCart(userId, cartProductDTO.getProductId(), cartProductDTO.getRentalMonths());
            return ResponseEntity.ok(cartDTO);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
    
    @DeleteMapping("/user/{userId}/products/{productId}")
    public ResponseEntity<CartDTO> removeProductFromCart(@PathVariable Long userId, @PathVariable Long productId) {
        try {
            CartDTO cartDTO = cartService.removeProductFromCart(userId, productId);
            return ResponseEntity.ok(cartDTO);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
