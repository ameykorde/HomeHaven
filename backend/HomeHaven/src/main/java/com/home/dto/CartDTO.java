package com.home.dto;

import java.util.Set;

public class CartDTO {

    private Long id;
    private Long userId;
    private Set<CartProductDTO> products;

    public CartDTO() {
    }

    public CartDTO(Long id, Long userId, Set<CartProductDTO> products) {
        this.id = id;
        this.userId = userId;
        this.products = products;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Set<CartProductDTO> getProducts() {
        return products;
    }

    public void setProducts(Set<CartProductDTO> products) {
        this.products = products;
    }
}
