package com.home.service;



import com.home.dto.AddressDTO;
import com.home.model.Address;
import com.home.model.User;
import com.home.repo.AddressRepository;
import com.home.repo.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    public AddressDTO addAddressForUser(Long userId, AddressDTO addressDTO) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Address address = new Address(addressDTO.getStreet(), addressDTO.getCity(), addressDTO.getState(), 
                                       addressDTO.getPostalCode(), addressDTO.getMobileNumber(), user);
        Address savedAddress = addressRepository.save(address);
        return mapToDTO(savedAddress);
    }

    public AddressDTO updateAddress(Long addressId, AddressDTO addressDTO) {
        Address existingAddress = addressRepository.findById(addressId)
                .orElseThrow(() -> new RuntimeException("Address not found"));
        existingAddress.setStreet(addressDTO.getStreet());
        existingAddress.setCity(addressDTO.getCity());
        existingAddress.setState(addressDTO.getState());
        existingAddress.setPostalCode(addressDTO.getPostalCode());
        existingAddress.setMobileNumber(addressDTO.getMobileNumber());
        Address updatedAddress = addressRepository.save(existingAddress);
        return mapToDTO(updatedAddress);
    }
    
    public List<AddressDTO> getAddressesByUserId(Long userId) {
        List<Address> addresses = addressRepository.findByUserId(userId);
        return addresses.stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    private AddressDTO mapToDTO(Address address) {
        return new AddressDTO(address.getId(), address.getStreet(), address.getCity(), address.getState(),
                              address.getPostalCode(), address.getMobileNumber(), address.getUser().getId());
    }
}
