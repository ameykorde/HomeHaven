package com.home.dto;

import com.home.enums.Category;
import com.home.enums.ProductType;

import java.math.BigDecimal;

public class CartProductDTO {

    private Long productId;
    private String productName;
    private BigDecimal price;
    private int quantity;
    private String description;
    private Category category; // Use the enum type here
    private ProductType type; // Use the enum type here
    private byte[] productImage1;
    private byte[] productImage2;
    private byte[] productImage3;
    private byte[] productImage4;
    private int rentalMonths;

    // Getters and Setters
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public byte[] getProductImage1() {
        return productImage1;
    }

    public void setProductImage1(byte[] productImage1) {
        this.productImage1 = productImage1;
    }

    public byte[] getProductImage2() {
        return productImage2;
    }

    public void setProductImage2(byte[] productImage2) {
        this.productImage2 = productImage2;
    }

    public byte[] getProductImage3() {
        return productImage3;
    }

    public void setProductImage3(byte[] productImage3) {
        this.productImage3 = productImage3;
    }

    public byte[] getProductImage4() {
        return productImage4;
    }

    public void setProductImage4(byte[] productImage4) {
        this.productImage4 = productImage4;
    }

    public int getRentalMonths() {
        return rentalMonths;
    }

    public void setRentalMonths(int rentalMonths) {
        this.rentalMonths = rentalMonths;
    }
}
