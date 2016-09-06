package com.andela.assessment.dao;

import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by kenny on 06/09/2016.
 */
@Repository
public interface SearchDao {

    List search(String q, String orderBy);

    List listCategories();
}
