// Main App JavaScript

// Load products on homepage
function loadHomepageProducts() {
    // Load Best Sellers
    const bestSellersContainer = document.getElementById('bestSellers');
    if (bestSellersContainer) {
        const bestSellers = getBestSellers(8);
        bestSellersContainer.innerHTML = bestSellers.map(product => createProductCard(product)).join('');
    }

    // Load New Arrivals
    const newArrivalsContainer = document.getElementById('newArrivals');
    if (newArrivalsContainer) {
        const newArrivals = getNewArrivals(8);
        newArrivalsContainer.innerHTML = newArrivals.map(product => createProductCard(product)).join('');
    }
}

// Create product card HTML
function createProductCard(product) {
    const price = product.salePrice || product.price;
    const isOnSale = product.salePrice !== undefined;
    const inWishlist = isInWishlist(product.id);

    return `
        <div class="product-card bg-white group relative">
            <a href="product.html?id=${product.id}" class="block relative overflow-hidden aspect-[3/4]">
                <img 
                    src="${product.images[0]}" 
                    alt="${product.name}"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                ${isOnSale ? '<span class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1">SALE</span>' : ''}
                ${product.isNew ? '<span class="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEW</span>' : ''}
            </a>
            
            <button 
                onclick="toggleWishlist('${product.id}'); event.preventDefault(); updateWishlistUI('${product.id}')" 
                class="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors z-10"
                id="wishlist-${product.id}"
            >
                <svg class="w-5 h-5 ${inWishlist ? 'fill-red-500 stroke-red-500' : 'fill-none stroke-current'}" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </button>

            <div class="p-4">
                <a href="product.html?id=${product.id}">
                    <h3 class="font-medium text-sm mb-2 hover:text-neutral-600 transition-colors">${product.name}</h3>
                </a>
                <div class="flex items-center gap-2 mb-2">
                    ${isOnSale ? `
                        <span class="font-medium">$${price.toFixed(2)}</span>
                        <span class="text-sm text-neutral-500 line-through">$${product.price.toFixed(2)}</span>
                    ` : `
                        <span class="font-medium">$${price.toFixed(2)}</span>
                    `}
                </div>
                <div class="flex items-center gap-1 text-xs text-neutral-600">
                    <div class="flex">
                        ${generateStars(product.rating)}
                    </div>
                    <span>(${product.reviews})</span>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<svg class="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }

    if (halfStar) {
        stars += '<svg class="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill-opacity="0.5"></path></svg>';
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<svg class="w-4 h-4 fill-neutral-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }

    return stars;
}

// Update wishlist UI
function updateWishlistUI(productId) {
    const button = document.getElementById(`wishlist-${productId}`);
    if (button) {
        const svg = button.querySelector('svg');
        const inWishlist = isInWishlist(productId);
        
        if (inWishlist) {
            svg.classList.add('fill-red-500', 'stroke-red-500');
            svg.classList.remove('fill-none');
        } else {
            svg.classList.remove('fill-red-500', 'stroke-red-500');
            svg.classList.add('fill-none');
        }
    }
}

// Newsletter signup
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showToast('Thank you for subscribing!');
    event.target.reset();
    return false;
}

// Initialize homepage
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the homepage
    if (document.getElementById('bestSellers') || document.getElementById('newArrivals')) {
        loadHomepageProducts();
    }
});
