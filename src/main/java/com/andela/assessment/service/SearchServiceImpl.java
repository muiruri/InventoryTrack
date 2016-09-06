package com.andela.assessment.service;

import com.andela.assessment.dao.SearchDao;
import com.andela.assessment.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by kenny on 06/09/2016.
 */
@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    private SearchDao searchDao;

    @Override
    public List<Product> search(String q, String orderBy) {
        return searchDao.search(q, orderBy);
    }

    @Override
    public List listCategories() {
        return searchDao.listCategories();
    }
}
