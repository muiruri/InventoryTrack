package com.andela.assessment.util;

/**
 * Created by kenny on 28/07/2016.
 */
public interface IERROR {

    ServiceError ERROR_1000 = new ServiceError("1000","An unhandled exception has occured.");
    ServiceError ERROR_1001 = new ServiceError("1001","Username exists.");
    ServiceError ERROR_1002 = new ServiceError("1001","Email address exists.");
    ServiceError ERROR_1011 = new ServiceError("1011","Unrecognized field.");
    ServiceError ERROR_1012 = new ServiceError("1011","Invalid request body.");
    ServiceError ERROR_1013 = new ServiceError("1013","Unauthorized request..");
    ServiceError ERROR_1014 = new ServiceError("1014","File is null.");
    ServiceError ERROR_1015 = new ServiceError("1015","File not pdf.");
}
