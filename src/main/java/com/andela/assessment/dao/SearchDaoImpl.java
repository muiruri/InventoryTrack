package com.andela.assessment.dao;

import com.andela.assessment.model.Category;
import com.andela.assessment.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by kenny on 06/09/2016.
 */
@Repository
public class SearchDaoImpl implements SearchDao {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    private DataSource dataSource;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    /**
     *  This function is responsible for querying the database and searching based on the input q.
     * @param q - The search input value
     * @param orderBy - Order By column, this is redundant at the moment but can be used if sorting will be handles by the backend.
     * @return
     */
    @Override
    public List<Product> search(String q, String orderBy) {
        List<Product> products = this.jdbcTemplate.query("SELECT p.id, p.name, p.price, p.category_id, c.name FROM product p JOIN category c ON p.category_id = c.id WHERE p.name LIKE '%" + q + "%' OR c.name LIKE '%" + q + "%'",
                new ProductMapper());
        return products;
    }

    /**
     *  Mapper for {@link Product}
     */
    private static final class ProductMapper implements RowMapper<Product> {

        public Product mapRow(ResultSet resultSet, int rowNum) throws SQLException {
            Product product = new Product();
            product.setId(resultSet.getInt("id"));
            product.setName(resultSet.getString("name"));
            product.setCategoryId(resultSet.getInt("category_id"));
            product.setPrice(resultSet.getDouble("price"));
            return product;
        }
    }

    /**
     *  This function is resposnsible of querying the database and fetching the categories.
     * @return
     */
    @Override
    public List listCategories() {
        List<Category> categories = this.jdbcTemplate.query("SELECT * FROM category",
                new RowMapper<Category>() {
                    @Override
                    public Category mapRow(ResultSet resultSet, int i) throws SQLException {
                        Category category = new Category();
                        category.setId(resultSet.getInt("id"));
                        category.setName(resultSet.getString("name"));
                        return category;
                    }
                });
        return categories;
    }
}
