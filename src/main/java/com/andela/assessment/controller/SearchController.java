package com.andela.assessment.controller;

import com.andela.assessment.model.Category;
import com.andela.assessment.model.Product;
import com.andela.assessment.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by kenny on 06/09/2016.
 * This is the search controller.
 * It handles the search and loads the categories.
 */
@Controller
public class SearchController extends BaseController{

    @Autowired
    private SearchService searchService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    /**
     *  This is the search endpoint
     * @param q - The search query
     * @return - A list of products that satisfy the search.
     */
    @RequestMapping(value = "search", method = RequestMethod.GET)
    public @ResponseBody
    List<Product> loadProducts(@RequestParam(value = "q", required = false) String q, @RequestParam(value = "orderBy", required = false) String orderBy) {

        return searchService.search(q, orderBy);
    }

    /**
     *  This end point returns the list of categories present in the database.
     * @return
     */
    @RequestMapping(value = "listCategories", method = RequestMethod.GET)
    public @ResponseBody  List<Category> listCategories() {
        return searchService.listCategories();
    }
}
