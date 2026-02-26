// Cart and Wishlist Functions

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('velmoraCart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('velmoraCart', JSON.stringify(cart));
    updateCartCount();
}

// Add item to cart
function addToCart(productId, selectedSize, selectedColor, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return false;

    const cart = getCart();
    const existingItemIndex = cart.findIndex(
        item => item.productId === productId && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            productId,
            selectedSize,
            selectedColor,
            quantity
        });
    }

    saveCart(cart);
    showToast('Added to cart!');
    return true;
}

// Remove item from cart
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

// Update cart item quantity
function updateCartQuantity(index, quantity) {
    const cart = getCart();
    if (quantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = quantity;
        saveCart(cart);
    }
}

// Get cart with full product details
function getCartWithDetails() {
    const cart = getCart();
    return cart.map(item => ({
        ...item,
        product: getProductById(item.productId)
    })).filter(item => item.product);
}

// Calculate cart subtotal
function getCartSubtotal() {
    const cart = getCartWithDetails();
    return cart.reduce((sum, item) => {
        const price = item.product.salePrice || item.product.price;
        return sum + (price * item.quantity);
    }, 0);
}

// Clear cart
function clearCart() {
    localStorage.removeItem('velmoraCart');
    updateCartCount();
}

// Update cart count in header
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = count || '';
        cartCountEl.style.display = count > 0 ? 'flex' : 'none';
    }
}

// Wishlist Functions

// Get wishlist from localStorage
function getWishlist() {
    const wishlist = localStorage.getItem('velmoraWishlist');
    return wishlist ? JSON.parse(wishlist) : [];
}

// Save wishlist to localStorage
function saveWishlist(wishlist) {
    localStorage.setItem('velmoraWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

// Toggle wishlist
function toggleWishlist(productId) {
    const wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist!');
    }
    
    saveWishlist(wishlist);
    return index === -1; // Returns true if added, false if removed
}

// Check if product is in wishlist
function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.includes(productId);
}

// Update wishlist count in header
function updateWishlistCount() {
    const wishlist = getWishlist();
    const wishlistCountEl = document.getElementById('wishlistCount');
    if (wishlistCountEl) {
        wishlistCountEl.textContent = wishlist.length || '';
        wishlistCountEl.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

// Get wishlist with full product details
function getWishlistWithDetails() {
    const wishlist = getWishlist();
    return wishlist.map(id => getProductById(id)).filter(product => product);
}

// Toast notification
function showToast(message, duration = 3000) {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Remove after duration
    setTimeout(() => {
        toast.remove();
    }, duration);
}

// Initialize counts on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateWishlistCount();
});
