
package com.home.controller;

import com.home.customexception.ResourceNotFoundException;
import com.home.dto.ProductDTO;
import com.home.enums.Category;
import com.home.enums.ProductType;
import com.home.model.Product;
import com.home.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(
            @RequestParam("productName") String productName,
            @RequestParam("price") BigDecimal price,
            @RequestParam("quantity") int quantity,
            @RequestParam("description") String description, 
            @RequestParam("category") Category category,
            @RequestParam("type") ProductType type,
            @RequestParam(value = "productImage1", required = false) MultipartFile productImage1,
            @RequestParam(value = "productImage2", required = false) MultipartFile productImage2,
            @RequestParam(value = "productImage3", required = false) MultipartFile productImage3,
            @RequestParam(value = "productImage4", required = false) MultipartFile productImage4
    ) {
        try {
            ProductDTO productDTO = new ProductDTO(productName, price, quantity, description, category, type, productImage1, productImage2, productImage3, productImage4);
            Product product = productService.saveProduct(productDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(product);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Product product = productService.getProductById(productId);
        if (product == null) {
            throw new ResourceNotFoundException("Product not found with id: " + productId);
        }
        return ResponseEntity.ok(product);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable("category") Category category) {
        List<Product> products = productService.getProductsByCategory(category);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/category/{category}/types")
    public ResponseEntity<List<Product>> getProductsByCategoryAndTypes(
            @PathVariable("category") Category category,
            @RequestParam List<ProductType> types) {
        List<Product> products = productService.getProductsByCategoryAndTypes(category, types);
        return ResponseEntity.ok(products);
    }
}
