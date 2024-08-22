package com.home.service;

import com.home.customexception.ResourceNotFoundException;
import com.home.dto.CartDTO;
import com.home.dto.CartProductDTO;
import com.home.model.Cart;
import com.home.model.CartProduct;
import com.home.model.Product;
import com.home.model.User;
import com.home.repo.CartRepository;
import com.home.repo.ProductRepository;
import com.home.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    public CartDTO getCartByUserId(Long userId) {
        Cart cart = cartRepository.findByUserIdWithProducts(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for userId: " + userId));
        return mapToDTO(cart);
    }

    @Transactional
    public CartDTO addProductToCart(Long userId, Long productId, int rentalMonths) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseGet(() -> {
                    User user = userRepository.findById(userId)
                            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + productId));

        CartProduct cartProduct = new CartProduct();
        cartProduct.setCart(cart);
        cartProduct.setProduct(product);
        cartProduct.setRentalMonths(rentalMonths);

        Set<CartProduct> products = cart.getProducts();
        if (products == null) {
            products = new HashSet<>();
        }
        products.add(cartProduct);
        cart.setProducts(products);

        return mapToDTO(cartRepository.save(cart));
    }
    
    @Transactional 
    public CartDTO removeProductFromCart(Long userId, Long productId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart not found for userId: " + userId));

        CartProduct cartProduct = cart.getProducts().stream()
                .filter(cp -> cp.getProduct().getId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Product not found in cart"));

        cart.getProducts().remove(cartProduct);

        cartRepository.save(cart);
        return mapToDTO(cart);
    }

    @Transactional
    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    private CartDTO mapToDTO(Cart cart) {
        CartDTO cartDTO = new CartDTO();
        cartDTO.setId(cart.getId());
        cartDTO.setUserId(cart.getUser().getId());
        cartDTO.setProducts(cart.getProducts().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toSet()));
        return cartDTO;
    }

    private CartProductDTO mapToDTO(CartProduct cartProduct) {
        CartProductDTO cartProductDTO = new CartProductDTO();
        Product product = cartProduct.getProduct();
        cartProductDTO.setProductId(product.getId());
        cartProductDTO.setProductName(product.getProductName());
        cartProductDTO.setPrice(product.getPrice());
        cartProductDTO.setQuantity(product.getQuantity());
        cartProductDTO.setDescription(product.getDescription());
        cartProductDTO.setCategory(product.getCategory());
        cartProductDTO.setType(product.getType());
        cartProductDTO.setProductImage1(product.getProductImage1());
        cartProductDTO.setProductImage2(product.getProductImage2());
        cartProductDTO.setProductImage3(product.getProductImage3());
        cartProductDTO.setProductImage4(product.getProductImage4());
        cartProductDTO.setRentalMonths(cartProduct.getRentalMonths());
        return cartProductDTO;
    }
}
