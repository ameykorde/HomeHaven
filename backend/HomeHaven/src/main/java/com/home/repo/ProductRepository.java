package com.home.repo;

import com.home.enums.Category;
import com.home.enums.ProductType;
import com.home.model.Product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findByCategory(Category category);
    List<Product> findByCategoryAndTypeIn(Category category, List<ProductType> types);
}
