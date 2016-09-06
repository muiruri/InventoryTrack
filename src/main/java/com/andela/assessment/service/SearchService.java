package com.andela.assessment.service;

import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by kenny on 06/09/2016.
 */
public interface SearchService {

    List search(String q, String orderBy);

    List listCategories();
}
