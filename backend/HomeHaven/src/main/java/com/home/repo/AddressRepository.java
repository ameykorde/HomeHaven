package com.home.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
	List<Address> findByUserId(Long userId);

}
