package com.home.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class CartProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    @JsonBackReference
    private Cart cart;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int rentalMonths;

    // Default constructor
    public CartProduct() {}

    // Parameterized constructor
    public CartProduct(Cart cart, Product product, int rentalMonths) {
        this.cart = cart;
        this.product = product;
        this.rentalMonths = rentalMonths;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getRentalMonths() {
        return rentalMonths;
    }

    public void setRentalMonths(int rentalMonths) {
        this.rentalMonths = rentalMonths;
    }
}
