package com.andela.assessment.controller;

import com.andela.assessment.util.IERROR;
import com.andela.assessment.util.ServiceError;
import com.andela.assessment.util.ServiceException;
import com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.multiaction.NoSuchRequestHandlingMethodException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by kenny on 06/09/2016.
 *
 * This is the base controller for the application and it handles all exceptions that are thrown by the extending controllers.
 *
 */
public class BaseController implements IERROR{

    @ExceptionHandler(Throwable.class)
    @ResponseBody
    public void handleException(final Exception e, final HttpServletRequest request,
                                HttpServletResponse response) {
        try {
            ServiceError error;
            response.setContentType("application/json");
            response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
            if(e instanceof ServiceException)
            {
                ServiceException serviceException  = (ServiceException)e;
                error = serviceException.getServiceError();
            }
            else if(e instanceof NoSuchRequestHandlingMethodException)
            {
                response.setStatus(HttpStatus.BAD_REQUEST.value());
                error = ERROR_1002;
            }
            else if(e instanceof UnrecognizedPropertyException)
            {
                response.setStatus(HttpStatus.BAD_REQUEST.value());
                ERROR_1011.setErrorMessage("Unrecognized field "+((UnrecognizedPropertyException) e).getPropertyName());
                error = ERROR_1011;
            }
            else if(e instanceof HttpMessageNotReadableException)
            {
                response.setStatus(HttpStatus.BAD_REQUEST.value());
                error = ERROR_1012;
            }
            else
            {
                error = ERROR_1000;
            }
            response.getWriter().write(new JSONObject(error).toString());
        } catch (Exception e1) {
            e1.printStackTrace();
        }
        finally{
            e.printStackTrace();
        }
    }
}
