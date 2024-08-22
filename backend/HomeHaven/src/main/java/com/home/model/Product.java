package com.home.model;

import java.math.BigDecimal;
//import java.util.Locale.Category;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.home.enums.ProductType;
import com.home.enums.Category;


	@Entity
	@Table(name = "products")
	public class Product {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(nullable = false)
	    private String productName;

	    @Column(nullable = false)
	    private BigDecimal price;

	    @Column(nullable = false)
	    private int quantity;

	    @Column(length = 500)
	    private String description;

	    @Enumerated(EnumType.STRING)
	    @Column(nullable = false)
	    private Category category;

	    @Enumerated(EnumType.STRING)
	    @Column(nullable = false)
	    private ProductType type;

	    @Lob
	    @Column(name = "product_image1")
	    private byte[] productImage1;

	    @Lob
	    @Column(name = "product_image2")
	    private byte[] productImage2;

	    @Lob
	    @Column(name = "product_image3")
	    private byte[] productImage3;

	    @Lob
	    @Column(name = "product_image4")
	    private byte[] productImage4;

	    // Default constructor
	    public Product() {}

	    // Parameterized constructor
	    public Product(String productName, BigDecimal price, int quantity, String description, Category category, ProductType type, byte[] productImage1, byte[] productImage2, byte[] productImage3, byte[] productImage4) {
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
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
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
	}