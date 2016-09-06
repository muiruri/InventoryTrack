package com.andela.assessment.util;

import java.io.Serializable;

/**
 * Created by kenny on 28/07/2016.
 */
public class ServiceError implements IERROR,Serializable {

    private String errorCode;
    private String errorMessage;

    public ServiceError(String errorCode, String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }

    public void setErrorMessage(String msg) {
        this.errorMessage = msg;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}
