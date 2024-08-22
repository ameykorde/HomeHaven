package com.home.globalexception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.home.customexception.AddressNotFoundException;
import com.home.customexception.InvalidCredentialsException;
import com.home.customexception.ResourceNotFoundException;
import com.home.customexception.UserNotFoundException;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.hibernate.exception.ConstraintViolationException;

@ControllerAdvice
public class GlobalException  {
	
	
	  @ExceptionHandler(Exception.class)
	    public ResponseEntity<String> handleGeneralException(Exception ex) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + ex.getMessage());
	    }

 @ExceptionHandler(ConstraintViolationException.class)
 public ResponseEntity<String> handleConstraintViolationException(ConstraintViolationException ex) {
     // Return a meaningful message to the client
     return new ResponseEntity<>("A user with this email already exists.", HttpStatus.BAD_REQUEST);
 	}
 @ExceptionHandler(UserNotFoundException.class)
 public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {
     return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
 }

 @ExceptionHandler(InvalidCredentialsException.class)
 public ResponseEntity<String> handleInvalidCredentialsException(InvalidCredentialsException ex)
 {
	 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
 }
 
 @ExceptionHandler(AddressNotFoundException.class)
 public ResponseEntity<String> handleAddressNotFoundException(AddressNotFoundException ex) {
     return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Address not found: " + ex.getMessage());
 }
 
 
 @ExceptionHandler(ResourceNotFoundException.class)
 @ResponseStatus(HttpStatus.NOT_FOUND)
 public ResponseEntity<String> handleResourceNotFoundException(ResourceNotFoundException e) {
     return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
 }
 @ExceptionHandler(IOException.class)
 @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
 public ResponseEntity<String> handleIOException(IOException e) {
     return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File processing error: " + e.getMessage());
 }
}
//return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
