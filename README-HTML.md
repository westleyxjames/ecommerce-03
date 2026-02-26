# Velmora eCommerce Website - HTML/CSS/JS Version

## 📋 Complete Website Documentation

This is a fully functional eCommerce website for Velmora, a premium clothing and shoes fashion brand, built with pure HTML, CSS, and JavaScript (no frameworks required).

## 🌐 All Available Pages

### Main Shopping Pages
1. **index.html** - Homepage with hero section, best sellers, and new arrivals
2. **shop.html** - Product catalog with filters and sorting
3. **product.html** - Individual product details with size/color selection
4. **cart.html** - Shopping cart with quantity management
5. **checkout.html** - Checkout form with COD payment only
6. **wishlist.html** - Saved products/favorites

### Information Pages
7. **about.html** - About Velmora brand
8. **contact.html** - Contact form and information
9. **faq.html** - Frequently asked questions with accordion

### Legal Pages (USA Compliant)
10. **privacy.html** - Privacy Policy
11. **terms.html** - Terms of Service
12. **returns.html** - Returns & Exchange Policy
13. **shipping.html** - Shipping Information

## 🎨 Design Features

- **Clean Luxury Aesthetic**: Minimalist design with large lifestyle imagery
- **Typography**: Inter font family throughout
- **Color Palette**: White, beige, black, neutral tones
- **Mobile-First**: Fully responsive design
- **Smooth Animations**: Transitions and hover effects

## ✨ Core Features

### Shopping Functionality
- ✅ Product browsing and filtering
- ✅ Size and color selection
- ✅ Add to cart functionality
- ✅ Wishlist/favorites
- ✅ Cart management (add, remove, update quantities)
- ✅ Checkout process with all 50 US states
- ✅ Cash on Delivery (COD) only payment option
- ✅ $5 COD handling fee
- ✅ Free shipping over $100
- ✅ Standard ($10) and Express ($15) shipping

### Technical Features
- ✅ LocalStorage persistence (cart & wishlist)
- ✅ Dynamic product rendering
- ✅ URL parameter routing
- ✅ Form validation
- ✅ Toast notifications
- ✅ Star ratings
- ✅ Product badges (New, Sale, Best Seller)
- ✅ Responsive navigation
- ✅ FAQ accordion

## 📁 File Structure

```
/
├── index.html              # Homepage
├── shop.html               # Product listing
├── product.html            # Product details
├── cart.html               # Shopping cart
├── checkout.html           # Checkout form
├── wishlist.html           # Wishlist
├── about.html              # About page
├── contact.html            # Contact page
├── faq.html                # FAQ page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── returns.html            # Returns policy
├── shipping.html           # Shipping info
├── styles.css              # Global styles
├── products-data.js        # Product database
├── cart-functions.js       # Cart & wishlist logic
└── app.js                  # Main app functionality
```

## 🚀 How to Use

### Opening the Website
1. Simply open `index.html` in any modern web browser
2. No server or build process required!
3. All pages are linked and fully functional

### Navigation Structure
- **Header**: Logo, category links (Men's, Women's, Shoes, Sale), cart, wishlist
- **Footer**: Links to shop categories, help pages, legal pages

### Shopping Flow
1. Browse products on homepage or shop page
2. Click product to view details
3. Select size and color
4. Add to cart or wishlist
5. View cart and update quantities
6. Proceed to checkout
7. Fill out shipping information
8. Select shipping method
9. Review order and place (COD only)

## 💾 Data Persistence

### LocalStorage Keys
- `velmoraCart` - Shopping cart items
- `velmoraWishlist` - Wishlist product IDs

### Sample Products
The site includes 8 sample products:
- 2 Men's clothing items
- 3 Women's clothing items
- 3 Shoe items

All products have working images from Unsplash.

## 🎯 Key Features by Page

### Homepage (index.html)
- Dynamic hero section with 3-grid lifestyle images
- Best sellers section (8 products)
- New arrivals section (8 products)
- Promotional banner
- Newsletter signup

### Shop (shop.html)
- Category filter (All, Men's, Women's, Shoes)
- Sort options (Featured, Price Low/High, Rating)
- Special filters (New Arrivals, Best Sellers)
- Product count display
- Empty state handling

### Product (product.html)
- Product image gallery
- Size selector
- Color selector
- Add to cart
- Add to wishlist
- Product details (fabric, rating, reviews)
- Stock status

### Cart (cart.html)
- Line items with images
- Quantity controls
- Remove items
- Order subtotal
- Empty cart state
- Continue shopping link

### Checkout (checkout.html)
- Contact information form
- Shipping address (all 50 US states)
- Shipping method selection
- COD payment (pre-selected, only option)
- Order summary
- Real-time price calculations
- Form validation

### Wishlist (wishlist.html)
- Saved products display
- Remove from wishlist
- Quick add to cart
- Empty wishlist state

## 🛠️ Customization

### Adding Products
Edit `products-data.js` and add new product objects:

```javascript
{
    id: 'unique-id',
    name: 'Product Name',
    price: 99.00,
    category: 'mens', // mens, womens, shoes
    subCategory: 'clothing', // clothing, sneakers, boots
    images: ['image-url'],
    description: 'Product description',
    fabric: 'Material info',
    sizes: ['S', 'M', 'L'],
    colors: [
        { name: 'Color Name', hex: '#HEXCODE' }
    ],
    inStock: true,
    isBestSeller: true, // optional
    isNew: true, // optional
    rating: 4.8,
    reviews: 100
}
```

### Changing Styles
Edit `styles.css` to modify:
- Colors
- Fonts
- Spacing
- Animations
- Responsive breakpoints

### Modifying Shipping Costs
Edit the `updateOrderSummary()` function in `checkout.html`

### Adding Payment Methods
Currently configured for COD only. To add more payment methods, edit the Payment Method section in `checkout.html`

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Legal

All legal pages are USA-compliant and include:
- Privacy Policy (CCPA/GDPR considerations)
- Terms of Service
- Returns & Exchange Policy (30-day returns)
- Shipping Information
- FAQ

## 📞 Contact Information

Included in legal pages:
- Email: support@velmora.com
- Phone: 1-800-VELMORA
- Address: 123 Fashion Avenue, New York, NY 10001

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Background**: White (#FFFFFF), Neutral-50 (#F9FAFB)
- **Text**: Black, Neutral-600, Neutral-700
- **Accents**: Red (sale), Green (success)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Spacing
- Container: `container mx-auto px-4`
- Section padding: `py-12` or `py-20`
- Card padding: `p-6` or `p-8`

## ⚡ Performance

- Optimized images from Unsplash CDN
- Minimal JavaScript
- CSS via Tailwind CDN
- LocalStorage for data persistence
- Fast page loads
- No external dependencies except Tailwind CSS

## 🐛 Known Limitations

1. No real backend - uses sample data
2. No actual payment processing (COD placeholder)
3. No user authentication
4. No order history
5. No real email functionality
6. Product images are external (Unsplash)

## 🔮 Future Enhancements

To make this production-ready, consider:
1. Backend integration (Node.js, PHP, etc.)
2. Database for products and orders
3. Real payment gateway
4. User authentication
5. Email confirmation system
6. Admin dashboard
7. Inventory management
8. Order tracking
9. Customer reviews
10. Search functionality

## 📄 License

This is a demonstration project for educational purposes.

## 🤝 Support

For questions or issues, refer to the FAQ page or contact form.

---

**Built with ❤️ for modern eCommerce**
