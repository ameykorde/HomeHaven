package com.home.dto;

import com.home.enums.Category;
import com.home.enums.ProductType;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

public class ProductDTO {

    private String productName;
    private BigDecimal price;
    private int quantity;
    private String description;
    private Category category;
    private ProductType type;
    private MultipartFile productImage1;
    private MultipartFile productImage2;
    private MultipartFile productImage3;
    private MultipartFile productImage4;

    // Default constructor
    public ProductDTO() {}

    // Parameterized constructor
    public ProductDTO(String productName, BigDecimal price, int quantity, String description, Category category, ProductType type, MultipartFile productImage1, MultipartFile productImage2, MultipartFile productImage3, MultipartFile productImage4) {
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.category = category;
        this.type = type;
        this.productImage1 = productImage1;
        this.productImage2 = productImage2;
        this.productImage3 = productImage3;
        this.productImage4 = productImage4;
    }

    // Getters and Setters
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

    public MultipartFile getProductImage1() {
        return productImage1;
    }

    public void setProductImage1(MultipartFile productImage1) {
        this.productImage1 = productImage1;
    }

    public MultipartFile getProductImage2() {
        return productImage2;
    }

    public void setProductImage2(MultipartFile productImage2) {
        this.productImage2 = productImage2;
    }

    public MultipartFile getProductImage3() {
        return productImage3;
    }

    public void setProductImage3(MultipartFile productImage3) {
        this.productImage3 = productImage3;
    }

    public MultipartFile getProductImage4() {
        return productImage4;
    }

    public void setProductImage4(MultipartFile productImage4) {
        this.productImage4 = productImage4;
    }
}