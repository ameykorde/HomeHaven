package com.home.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.home.enums.AdminStatus;

import java.util.Set;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
//    @Pattern(regexp = "^(?!.*[\\d\\W]).*$", message = "Name must not contain digits or special symbols")
    private String name;

    @NotBlank
   // @Pattern(regexp = "^[\\w.-]+@[\\w.-]+$", message = "Email must be a valid email address")
    @Column(unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    private AdminStatus admin = AdminStatus.NO;

    @NotBlank
    //@Size(min = 8, message = "Password must be at least 8 characters long")
    //@Pattern(regexp = "(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).*", message = "Password must contain at least one letter, one digit, and one special character")
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Address> addresses;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Cart cart;

    // Default constructor
    public User() {
    }

    // Constructor with parameters
    public User(String name, String email, AdminStatus admin, String password) {
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.password = password;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public AdminStatus getAdmin() {
        return admin;
    }

    public void setAdmin(AdminStatus admin) {
        this.admin = admin;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(Set<Address> addresses) {
        this.addresses = addresses;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }
}
