package com.home.dto;

import com.home.enums.AdminStatus;
import java.util.Set;

import org.springframework.stereotype.Component;
@Component
public class UserDTO {

    private Long id;
    private String name;
    private String email;
    private AdminStatus admin;
    private Set<AddressDTO> addresses;

    // Default constructor
    public UserDTO() {}

    // Constructor with parameters
    public UserDTO(Long id, String name, String email, AdminStatus admin, Set<AddressDTO> addresses) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.addresses = addresses;
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

    public Set<AddressDTO> getAddresses() {
        return addresses;
    }

    public void setAddresses(Set<AddressDTO> addresses) {
        this.addresses = addresses;
    }
}
