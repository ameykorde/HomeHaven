package com.home.customexception;

public class InvalidCredentialsException extends RuntimeException {
    public InvalidCredentialsException(String message) 
    {
    	super(message);
    }
}