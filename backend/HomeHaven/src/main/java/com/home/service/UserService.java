package com.home.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.home.customexception.InvalidCredentialsException;
import com.home.customexception.UserNotFoundException;
import com.home.model.User;
import com.home.repo.UserRepository;

import java.util.Optional;

import org.hibernate.exception.ConstraintViolationException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        // Check if user already exists
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new ConstraintViolationException("User with this email already exists.", null, null);
        }
        return userRepository.save(user);
    }
    public User authenticate(String email, String password)
    {
    	User user=userRepository.findByEmail(email).orElseThrow(()-> new UserNotFoundException("User Not Found"));
    	
    	if(password.equals(user.getPassword()))
    	{
    		return user;
    	}
    	else
    	{
    		throw new InvalidCredentialsException("Invalid");
    	}
    }
}
/*User user = userRepository.findByEmail(email)
.orElseThrow(() -> new UserNotFoundException("User not found"));

if (password.equals(user.getPassword())) 
return user;
else
throw new InvalidCredentialsException("Invalid");
    }
*/