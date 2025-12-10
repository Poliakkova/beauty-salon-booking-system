package com.project.booking_backend.exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id) {
        super("Could not fing user with id " + id);
    }
}
