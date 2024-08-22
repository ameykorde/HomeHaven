package com.home.dto;

import com.home.enums.AdminStatus;

public class LoginResponse {
    private Long userId;
    private AdminStatus adminStatus;

    // Constructors
    public LoginResponse(Long userId, AdminStatus adminStatus) {
        this.userId = userId;
        this.adminStatus = adminStatus;
    }

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public AdminStatus getAdminStatus() {
        return adminStatus;
    }

    public void setAdminStatus(AdminStatus adminStatus) {
        this.adminStatus = adminStatus;
    }
}
