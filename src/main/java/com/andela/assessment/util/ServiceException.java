package com.andela.assessment.util;

/**
 * Created by kenny on 28/07/2016.
 */
public class ServiceException extends RuntimeException{

    private ServiceError error;

    public ServiceException(ServiceError error) {
        this.error = error;
    }

    public ServiceError getServiceError() {
        return this.error;
    }
}
