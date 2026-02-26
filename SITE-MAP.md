# Velmora Website - Complete Site Map

## 🗺️ Full Page Structure

### 🛍️ **Shopping Experience**

#### **1. Homepage** (`index.html`)
- **URL**: `index.html`
- **Features**:
  - Hero section with dynamic 3-grid layout
  - Best sellers carousel
  - New arrivals grid
  - Promotional banner
  - Newsletter signup
- **Links to**: Shop, Product details, Wishlist, Cart

#### **2. Shop Page** (`shop.html`)
- **URL**: `shop.html?category=[mens|womens|shoes|all]`
- **Features**:
  - Category filtering
  - Sort by price/rating
  - Special filters (New, Best Sellers)
  - Product grid
  - Product count
- **Links to**: Product details, Wishlist, Cart

#### **3. Product Detail** (`product.html`)
- **URL**: `product.html?id=[product-id]`
- **Features**:
  - Product images
  - Size selector
  - Color selector
  - Add to cart
  - Add to wishlist
  - Product specifications
  - Rating & reviews
- **Links to**: Cart, Wishlist, Shop

#### **4. Shopping Cart** (`cart.html`)
- **URL**: `cart.html`
- **Features**:
  - Cart items list
  - Quantity controls
  - Remove items
  - Order summary
  - Empty cart state
- **Links to**: Checkout, Shop, Product details

#### **5. Checkout** (`checkout.html`)
- **URL**: `checkout.html`
- **Features**:
  - Contact form
  - Shipping address (50 US states)
  - Shipping method selection
  - COD payment (only option)
  - Order summary
  - Real-time calculations
- **Links to**: Order confirmation (alert)

#### **6. Wishlist** (`wishlist.html`)
- **URL**: `wishlist.html`
- **Features**:
  - Saved products grid
  - Remove from wishlist
  - Add to cart
  - Empty state
- **Links to**: Product details, Cart, Shop

---

### 📄 **Information Pages**

#### **7. About Us** (`about.html`)
- **URL**: `about.html`
- **Content**:
  - Brand story
  - Philosophy
  - Quality commitment
  - Values
  - Newsletter signup
- **Links to**: Contact, Shop

#### **8. Contact** (`contact.html`)
- **URL**: `contact.html`
- **Features**:
  - Contact form
  - Email address
  - Phone number
  - Business hours
  - Physical address
- **Links to**: FAQ, Support

#### **9. FAQ** (`faq.html`)
- **URL**: `faq.html`
- **Content**:
  - 10 common questions
  - Accordion interface
  - Topics: Orders, Shipping, Returns, Payments
- **Links to**: Contact, Returns, Shipping

---

### ⚖️ **Legal Pages (USA Compliant)**

#### **10. Privacy Policy** (`privacy.html`)
- **URL**: `privacy.html`
- **Compliance**: CCPA, GDPR considerations
- **Sections**:
  1. Introduction
  2. Information We Collect
  3. How We Use Information
  4. Data Security
  5. Data Retention
  6. Your Legal Rights
  7. Cookies
  8. Third-Party Links
  9. California Privacy Rights
  10. Children's Privacy
  11. Changes to Policy
  12. Contact Information

#### **11. Terms of Service** (`terms.html`)
- **URL**: `terms.html`
- **Compliance**: eCommerce legal requirements
- **Sections**:
  1. Acceptance of Terms
  2. Use License
  3. Product Information
  4. Pricing & Availability
  5. Orders & Payment
  6. Shipping
  7. Returns & Refunds
  8. User Accounts
  9. Intellectual Property
  10. Prohibited Uses
  11. Disclaimer
  12. Limitations
  13. Governing Law
  14. Changes to Terms
  15. Contact Information

#### **12. Returns Policy** (`returns.html`)
- **URL**: `returns.html`
- **Compliance**: 30-day return guarantee
- **Sections**:
  - 30-Day Return Policy
  - Eligible Items
  - How to Return (4-step process)
  - Return Shipping
  - Exchanges
  - Refund Processing
  - Damaged/Defective Items
  - Wrong Item Received
  - Late/Missing Refunds
  - Sale Items
  - Store Credit
- **Features**: Free return labels (continental US)

#### **13. Shipping Information** (`shipping.html`)
- **URL**: `shipping.html`
- **Compliance**: All 50 US states
- **Sections**:
  - Shipping Options (Standard & Express)
  - Shipping Destinations (50 states)
  - Order Processing
  - Order Tracking
  - Delivery Information
  - Shipping Restrictions
  - Multiple Item Orders
  - Shipping Delays
  - Lost/Stolen Packages
  - Incorrect Address
  - Holiday Shipping
- **Rates**:
  - Standard: $10 (FREE over $100)
  - Express: $15

---

## 🔗 **Navigation Structure**

### **Header Navigation** (All Pages)
- Logo → Homepage
- Men's → `shop.html?category=mens`
- Women's → `shop.html?category=womens`
- Shoes → `shop.html?category=shoes`
- Sale → `shop.html?category=sale`
- Wishlist Icon → `wishlist.html`
- Cart Icon → `cart.html`

### **Footer Navigation** (All Pages)

**Column 1: Brand**
- Velmora Logo
- Tagline

**Column 2: Shop**
- Men's → `shop.html?category=mens`
- Women's → `shop.html?category=womens`
- Shoes → `shop.html?category=shoes`
- Sale → `shop.html?category=sale`

**Column 3: Help**
- Contact → `contact.html`
- FAQ → `faq.html`
- Shipping → `shipping.html`
- Returns → `returns.html`

**Column 4: About/Legal**
- About Us → `about.html`
- Privacy Policy → `privacy.html`
- Terms of Service → `terms.html`

---

## 📊 **Technical Files**

### **JavaScript**
1. **products-data.js** - Product database (8 products)
2. **cart-functions.js** - Cart & wishlist management
3. **app.js** - Homepage product loading

### **CSS**
1. **styles.css** - Global styles & animations

### **Assets**
- All product images from Unsplash CDN
- Tailwind CSS via CDN
- Google Fonts (Inter)

---

## 💾 **Data Flow**

### **LocalStorage Keys**
- `velmoraCart` - Shopping cart data
- `velmoraWishlist` - Wishlist product IDs

### **URL Parameters**
- `?category=[mens|womens|shoes|all]` - Shop filtering
- `?filter=[new|best-sellers|sale]` - Shop special filters
- `?id=[product-id]` - Product detail page

---

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages are fully responsive with mobile-first design.

---

## ✅ **Feature Checklist**

### Shopping Features
- [x] Product browsing
- [x] Category filtering
- [x] Product search (visual)
- [x] Size selection
- [x] Color selection
- [x] Add to cart
- [x] Update quantities
- [x] Remove from cart
- [x] Wishlist functionality
- [x] Checkout process
- [x] All 50 US states
- [x] COD payment only
- [x] Free shipping over $100
- [x] Multiple shipping options

### Technical Features
- [x] LocalStorage persistence
- [x] Dynamic rendering
- [x] URL routing
- [x] Form validation
- [x] Toast notifications
- [x] Star ratings
- [x] Product badges
- [x] Responsive design
- [x] FAQ accordion
- [x] Empty states
- [x] Loading states

### Legal Compliance
- [x] Privacy Policy (CCPA/GDPR)
- [x] Terms of Service
- [x] Returns Policy (30-day)
- [x] Shipping Information
- [x] Contact Information
- [x] FAQ

---

## 🚀 **Quick Start**

1. Open `index.html` in a web browser
2. No build process or server required
3. All features work locally
4. Data persists in localStorage

---

## 📞 **Support Information**

**Email**: support@velmora.com  
**Phone**: 1-800-VELMORA  
**Address**: 123 Fashion Avenue, New York, NY 10001  
**Hours**: Monday - Friday, 9am - 6pm EST

---

**Total Pages**: 13  
**JavaScript Files**: 3  
**CSS Files**: 1  
**Product Database**: 8 items  
**Categories**: 3 (Men's, Women's, Shoes)  
**Compliance**: USA eCommerce standards
