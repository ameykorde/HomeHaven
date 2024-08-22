package com.home.service;

import com.home.customexception.ResourceNotFoundException;
import com.home.dto.ProductDTO;
import com.home.enums.Category;
import com.home.enums.ProductType;
import com.home.model.Product;
import com.home.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(ProductDTO productDTO) throws IOException {
        Product product = new Product();
        product.setProductName(productDTO.getProductName());
        product.setPrice(productDTO.getPrice());
        product.setQuantity(productDTO.getQuantity());
        product.setDescription(productDTO.getDescription());
        product.setCategory(productDTO.getCategory());
        product.setType(productDTO.getType());

        if (productDTO.getProductImage1() != null && !productDTO.getProductImage1().isEmpty()) {
            product.setProductImage1(productDTO.getProductImage1().getBytes());
        }
        if (productDTO.getProductImage2() != null && !productDTO.getProductImage2().isEmpty()) {
            product.setProductImage2(productDTO.getProductImage2().getBytes());
        }
        if (productDTO.getProductImage3() != null && !productDTO.getProductImage3().isEmpty()) {
            product.setProductImage3(productDTO.getProductImage3().getBytes());
        }
        if (productDTO.getProductImage4() != null && !productDTO.getProductImage4().isEmpty()) {
            product.setProductImage4(productDTO.getProductImage4().getBytes());
        }

        return productRepository.save(product);
    }

    public Product getProductById(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));
    }

    public List<Product> getProductsByCategory(Category category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> getProductsByCategoryAndTypes(Category category, List<ProductType> types) {
        return productRepository.findByCategoryAndTypeIn(category, types);
    }
}
