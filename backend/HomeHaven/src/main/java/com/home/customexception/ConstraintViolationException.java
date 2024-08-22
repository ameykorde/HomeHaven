package com.home.customexception;

public class ConstraintViolationException extends RuntimeException{
	public ConstraintViolationException(String message)
	{
		super(message);
	}

}
