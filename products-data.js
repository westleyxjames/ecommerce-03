// Products Database
const products = [
    {
        id: 'mc-1',
        name: 'Premium Cotton Oxford Shirt',
        price: 89.00,
        category: 'mens',
        subCategory: 'clothing',
        images: [
            'https://images.unsplash.com/photo-1644860588182-0998b4ef5587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG94Zm9yZCUyMGRyZXNzJTIwc2hpcnR8ZW58MXx8fHwxNzcyMDQzNTEwfDA&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Classic Oxford shirt crafted from premium long-staple cotton.',
        fabric: '100% Premium Long-Staple Cotton',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: [
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Light Blue', hex: '#ADD8E6' },
            { name: 'Navy', hex: '#000080' }
        ],
        inStock: true,
        isBestSeller: true,
        rating: 4.8,
        reviews: 124
    },
    {
        id: 'mc-2',
        name: 'Merino Wool Crew Sweater',
        price: 129.00,
        category: 'mens',
        subCategory: 'clothing',
        images: [
            'https://images.unsplash.com/photo-1597954222003-0ce9cfa08494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJpbm8lMjB3b29sJTIwc3dlYXRlciUyMG1lbnxlbnwxfHx8fDE3NzIwNDM1MTB8MA&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Luxuriously soft merino wool sweater with a classic crew neck.',
        fabric: '100% Extra-Fine Merino Wool',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: [
            { name: 'Charcoal', hex: '#36454F' },
            { name: 'Navy', hex: '#000080' },
            { name: 'Camel', hex: '#C19A6B' }
        ],
        inStock: true,
        isNew: true,
        rating: 4.9,
        reviews: 89
    },
    {
        id: 'wc-1',
        name: 'Silk Blend Blouse',
        price: 119.00,
        category: 'womens',
        subCategory: 'clothing',
        images: [
            'https://images.unsplash.com/photo-1761117228880-df2425bd70da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwYmxvdXNlJTIwd29tYW4lMjBlbGVnYW50fGVufDF8fHx8MTc3MjA0MzUxMXww&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Elegant silk blend blouse with a relaxed fit.',
        fabric: '70% Silk, 30% Viscose',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Ivory', hex: '#FFFFF0' },
            { name: 'Blush', hex: '#FFE4E1' },
            { name: 'Navy', hex: '#000080' }
        ],
        inStock: true,
        isBestSeller: true,
        rating: 4.9,
        reviews: 203
    },
    {
        id: 'wc-2',
        name: 'Cashmere Cardigan',
        price: 249.00,
        category: 'womens',
        subCategory: 'clothing',
        images: [
            'https://images.unsplash.com/photo-1658087239220-9b50dc92ab57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMGNhcmRpZ2FuJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjA0MzUxMXww&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Luxurious 100% cashmere cardigan.',
        fabric: '100% Mongolian Cashmere',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Camel', hex: '#C19A6B' },
            { name: 'Grey', hex: '#808080' },
            { name: 'Black', hex: '#000000' }
        ],
        inStock: true,
        isNew: true,
        isBestSeller: true,
        rating: 5.0,
        reviews: 87
    },
    {
        id: 'ss-1',
        name: 'Classic Leather Sneakers',
        price: 139.00,
        category: 'shoes',
        subCategory: 'sneakers',
        images: [
            'https://images.unsplash.com/photo-1718802312915-4e03a6f33735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxlYXRoZXIlMjBzbmVha2VycyUyMG1pbmltYWx8ZW58MXx8fHwxNzcyMDE2NTE4fDA&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Minimalist leather sneakers with Italian craftsmanship.',
        fabric: 'Full-Grain Italian Leather Upper',
        sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
        colors: [
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Black', hex: '#000000' },
            { name: 'Navy', hex: '#000080' }
        ],
        inStock: true,
        isBestSeller: true,
        rating: 4.9,
        reviews: 342
    },
    {
        id: 'ss-2',
        name: 'Performance Running Sneakers',
        price: 159.00,
        category: 'shoes',
        subCategory: 'sneakers',
        images: [
            'https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzE5OTQxMDN8MA&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Advanced cushioning technology meets sleek design.',
        fabric: 'Breathable Mesh Upper',
        sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
        colors: [
            { name: 'Grey/White', hex: '#808080' },
            { name: 'Black/Red', hex: '#000000' }
        ],
        inStock: true,
        isNew: true,
        rating: 4.7,
        reviews: 218
    },
    {
        id: 'sb-1',
        name: 'Chelsea Leather Boots',
        price: 229.00,
        category: 'shoes',
        subCategory: 'boots',
        images: [
            'https://images.unsplash.com/photo-1559826884-dbcc4a21caed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVsc2VhJTIwYm9vdHMlMjBsZWF0aGVyJTIwYnJvd258ZW58MXx8fHwxNzcyMDQzNTEzfDA&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Handcrafted Chelsea boots in premium leather.',
        fabric: 'Full-Grain Leather',
        sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
        colors: [
            { name: 'Tan', hex: '#D2B48C' },
            { name: 'Black', hex: '#000000' },
            { name: 'Brown', hex: '#8B4513' }
        ],
        inStock: true,
        isBestSeller: true,
        rating: 4.8,
        reviews: 189
    },
    {
        id: 'wc-8',
        name: 'Leather Moto Jacket',
        price: 379.00,
        category: 'womens',
        subCategory: 'clothing',
        images: [
            'https://images.unsplash.com/photo-1611078844630-85c0a9a34623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwbW90byUyMHdvbWFufGVufDF8fHx8MTc3MjA0MzUxOHww&ixlib=rb-4.1.0&q=80&w=400'
        ],
        description: 'Classic moto jacket in buttery soft leather.',
        fabric: '100% Genuine Leather',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'Cognac', hex: '#A15F3D' }
        ],
        inStock: true,
        isBestSeller: true,
        isNew: true,
        rating: 4.9,
        reviews: 287
    }
];

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(p => p.category === category);
}

// Get products by filter
function getProductsByFilter(filter) {
    if (filter === 'new') return products.filter(p => p.isNew);
    if (filter === 'best-sellers') return products.filter(p => p.isBestSeller);
    if (filter === 'sale') return products.filter(p => p.salePrice);
    return products;
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Get best sellers
function getBestSellers(limit = 8) {
    return products.filter(p => p.isBestSeller).slice(0, limit);
}

// Get new arrivals
function getNewArrivals(limit = 8) {
    return products.filter(p => p.isNew).slice(0, limit);
}
