/**
 * MAG GARMENT V2 — Ethiopian Fashion
 * Handcrafted in Addis Ababa
 */

// ============================================
// PRODUCT DATA
// ============================================
const defaultProducts = [
    {
        id: 1,
        name: "Traditional Habesha Kemis",
        nameAm: "የልዩ ቀናት ቀሚስ",
        category: "traditional",
        price: 2499.99,
        originalPrice: 2999.99,
        image: "images/product-1.png",
        images: ["images/product-1.png", "images/home-img-1.png", "images/home-img-2.png"],
        badge: "bestseller",
        description: "Traditional habesha kemis for Meskel, Timkat, and weddings. Hand-embroidered tibeb borders on premium Ethiopian cotton.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["White", "Cream", "Gold"]
    },
    {
        id: 2,
        name: "Modern Ethiopian Jacket",
        nameAm: "ዘመናዊ ጫማ",
        category: "modern",
        price: 1899.99,
        originalPrice: null,
        image: "images/product-2.png",
        images: ["images/product-2.png", "images/home-img-3.png"],
        badge: "new",
        description: "Contemporary cuts with authentic tibeb embroidery. Versatile enough for both casual and formal occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Brown"]
    },
    {
        id: 3,
        name: "Handwoven Netela Scarf",
        nameAm: "ነጠላ",
        category: "accessories",
        price: 899.99,
        originalPrice: 1199.99,
        image: "images/product-3.png",
        images: ["images/product-3.png", "images/home-img-1.png"],
        badge: "sale",
        description: "Traditional netela handwoven by Addis artisans. Lightweight and elegant, perfect for any season.",
        sizes: ["One Size"],
        colors: ["White", "Beige", "Gold"]
    },
    {
        id: 4,
        name: "Family Holiday Set",
        nameAm: "ለቤተሰብ",
        category: "traditional",
        price: 4499.99,
        originalPrice: 4999.99,
        image: "images/product-4.png",
        images: ["images/product-4.png", "images/home-img-2.png", "images/home-img-3.png"],
        badge: "premium",
        description: "Matching sets for Ethiopian holidays and special occasions. Complete family package with tibeb embroidery.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Ivory"]
    },
    {
        id: 5,
        name: "Ethiopian Cotton Shawl",
        nameAm: "ሹል",
        category: "accessories",
        price: 1499.99,
        originalPrice: null,
        image: "images/home-img-1.png",
        images: ["images/home-img-1.png", "images/product-3.png"],
        badge: null,
        description: "Luxurious cotton shawl with traditional Ethiopian border patterns. Generous size makes it versatile for styling.",
        sizes: ["One Size"],
        colors: ["Natural", "White", "Black"]
    },
    {
        id: 6,
        name: "Casual Modern Blouse",
        nameAm: "ዘመናዊ ሹራብ",
        category: "modern",
        price: 1099.99,
        originalPrice: null,
        image: "images/home-img-2.png",
        images: ["images/home-img-2.png", "images/product-4.png"],
        badge: "new",
        description: "A stylish everyday blouse with subtle Ethiopian design details. Comfortable, breathable, and effortlessly chic.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Light Blue", "Sage"]
    },
    {
        id: 7,
        name: "Designer Embroidered Tee",
        nameAm: "ዲዛይነር ቲሸርት",
        category: "modern",
        price: 1299.99,
        originalPrice: null,
        image: "images/home-img-3.png",
        images: ["images/home-img-3.png", "images/product-2.png"],
        badge: null,
        description: "Premium cotton t-shirt featuring hand-embroidered Ethiopian motifs. A perfect blend of comfort and cultural expression.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Black", "Gray"]
    },
    {
        id: 8,
        name: "Leather Sandals",
        nameAm: "ቆላ",
        category: "accessories",
        price: 1799.99,
        originalPrice: 2199.99,
        image: "images/product-2.png",
        images: ["images/product-2.png"],
        badge: "sale",
        description: "Handcrafted leather sandals with traditional Ethiopian design elements. Comfortable sole and premium leather construction.",
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        colors: ["Brown", "Black", "Tan"]
    }
];

let products = JSON.parse(localStorage.getItem('mag_products')) || defaultProducts;
let cart = JSON.parse(localStorage.getItem('mag_cart')) || [];
let currentFilter = 'all';
let currentSort = 'default';
let currentLang = localStorage.getItem('mag_lang') || 'en';

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {};

function initElements() {
    elements.preloader = document.getElementById('preloader');
    elements.header = document.getElementById('header');
    elements.menuToggle = document.getElementById('menuToggle');
    elements.navbar = document.getElementById('navbar');
    elements.cartToggle = document.getElementById('cartToggle');
    elements.cartSidebar = document.getElementById('cartSidebar');
    elements.cartOverlay = document.getElementById('cartOverlay');
    elements.cartClose = document.getElementById('cartClose');
    elements.cartItems = document.getElementById('cartItems');
    elements.cartCount = document.getElementById('cartCount');
    elements.cartTotal = document.getElementById('cartTotal');
    elements.checkoutBtn = document.getElementById('checkoutBtn');
    elements.darkToggle = document.getElementById('darkToggle');
    elements.langToggle = document.getElementById('langToggle');
    elements.toastContainer = document.getElementById('toastContainer');
    elements.backToTop = document.getElementById('backToTop');
    elements.productGrid = document.getElementById('productGrid');
    elements.productDetailModal = document.getElementById('productDetailModal');
    elements.detailContent = document.getElementById('detailContent');
    elements.detailClose = document.getElementById('detailClose');
    elements.orderForm = document.getElementById('orderForm');
    elements.formSuccess = document.getElementById('formSuccess');
    elements.newsletterForm = document.getElementById('newsletterForm');
    elements.filterBtns = document.querySelectorAll('.filter-btn');
    elements.sortSelect = document.getElementById('sortSelect');
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initElements();
    initPreloader();
    initNavigation();
    initCart();
    initDarkMode();
    initLanguage();
    initScrollEffects();
    initSwiper();

    // Check if shop page
    if (document.body.classList.contains('shop-page') || elements.productGrid) {
        if (typeof initShopPage === 'function') initShopPage();
    }

    // Check if admin page
    if (typeof initAdminPage === 'function') initAdminPage();
});

// ============================================
// PRELOADER
// ============================================
function initPreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (elements.preloader) elements.preloader.classList.add('hidden');
        }, 500);
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    if (elements.menuToggle) {
        elements.menuToggle.addEventListener('click', () => {
            elements.menuToggle.classList.toggle('active');
            elements.navbar.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (elements.menuToggle) elements.menuToggle.classList.remove('active');
            if (elements.navbar) elements.navbar.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        if (elements.header) {
            elements.header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
}

// ============================================
// CART
// ============================================
function initCart() {
    if (elements.cartToggle) elements.cartToggle.addEventListener('click', openCart);
    if (elements.cartClose) elements.cartClose.addEventListener('click', closeCart);
    if (elements.cartOverlay) elements.cartOverlay.addEventListener('click', closeCart);

    if (elements.checkoutBtn) {
        elements.checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('error', 'Cart Empty', 'Add products to cart first');
                return;
            }
            // Close cart and show order form modal
            closeCart();
            showOrderFormModal();
        });
    }

    // Close order modal
    var orderModalClose = document.getElementById('orderModalClose');
    var orderModal = document.getElementById('orderModal');
    if (orderModalClose) {
        orderModalClose.addEventListener('click', function() {
            orderModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    if (orderModal) {
        orderModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    updateCart();
}

function openCart() {
    if (elements.cartSidebar) elements.cartSidebar.classList.add('active');
    if (elements.cartOverlay) elements.cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    if (elements.cartSidebar) elements.cartSidebar.classList.remove('active');
    if (elements.cartOverlay) elements.cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId, size, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            nameAm: product.nameAm,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        });
    }

    saveCart();
    updateCart();
    showToast('success', 'Added to cart!', `${product.name} (${size})`);
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCart();
    showToast('error', 'Removed from cart', '');
}

function updateQuantity(productId, size, delta) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
            return;
        }
    }
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem('mag_cart', JSON.stringify(cart));
}

function updateCart() {
    if (elements.cartCount) {
        elements.cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    if (elements.cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        elements.cartTotal.textContent = total.toLocaleString('en-US', { minimumFractionDigits: 2 }) + ' ETB';
    }
    if (elements.cartItems) {
        if (cart.length === 0) {
            elements.cartItems.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p></div>`;
        } else {
            elements.cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${currentLang === 'am' && item.nameAm ? item.nameAm : item.name}</div>
                        <div class="cart-item-variant">Size: ${item.size}</div>
                        <div class="cart-item-price">${item.price.toLocaleString()} ETB</div>
                        <div class="cart-item-quantity">
                            <button onclick="window.updateCartQty(${item.id}, '${item.size}', -1)">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="window.updateCartQty(${item.id}, '${item.size}', 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="window.removeCartItem(${item.id}, '${item.size}')"><i class="fas fa-trash"></i></button>
                </div>
            `).join('');
        }
    }
}

window.updateCartQty = updateQuantity;
window.removeCartItem = removeFromCart;

// ============================================
// CHAPA PAYMENT INTEGRATION
// ============================================
function initiateChapaPayment(total, items, txRef, orderData) {
    // Chapa Payment Integration
    // Docs: https://developer.chapa.co
    //
    // To activate Chapa:
    // 1. Sign up at https://chapa.co
    // 2. Get your API key from the dashboard
    // 3. Replace YOUR_CHAPA_SECRET_KEY below
    // 4. Set up webhook for payment verification

    const CHAPA_SECRET_KEY = 'YOUR_CHAPA_SECRET_KEY'; // Replace with your key
    const CHAPA_API_URL = 'https://api.chapa.co/v1/transaction/initialize';

    // Show payment modal
    showChapaPaymentModal(total, items, orderData);

    // Uncomment below when you have your Chapa API key:
    /*
    fetch(CHAPA_API_URL, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + CHAPA_SECRET_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: total,
            currency: 'ETB',
            email: orderData.email || 'customer@example.com',
            first_name: orderData.name || 'Customer',
            last_name: '',
            tx_ref: txRef,
            callback_url: window.location.origin + '/verify.html',
            return_url: window.location.origin + '/success.html',
            customization: {
                title: 'Mag Garment',
                description: 'Ethiopian Fashion Order'
            }
        })
    })
    .then(r => r.json())
    .then(data => {
        if (data.status === 'success') {
            window.location.href = data.data.checkout_url;
        } else {
            showToast('error', 'Payment Failed', data.message || 'Please try again');
        }
    })
    .catch(err => {
        showToast('error', 'Connection Error', 'Please check your internet');
    });
    */
}

function showChapaPaymentModal(total, items, orderData) {
    // Create a payment summary before redirecting to Chapa
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'chapaModal';
    modal.innerHTML = `
        <div class="product-modal" style="max-width:500px;">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
            <div style="padding:40px;text-align:center;">
                <h2 style="font-family:var(--font-display);color:var(--brown);margin-bottom:16px;">Complete Your Order</h2>
                <div style="background:var(--cream);border-radius:var(--radius);padding:20px;margin-bottom:24px;text-align:left;">
                    <h4 style="margin-bottom:12px;color:var(--brown);">Order Summary</h4>
                    ${items.map(item => `
                        <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.9rem;">
                            <span>${item.name} (${item.size}) x${item.quantity}</span>
                            <span style="font-weight:600">${(item.price * item.quantity).toLocaleString()} ETB</span>
                        </div>
                    `).join('')}
                    <hr style="border:none;border-top:1px solid var(--border);margin:12px 0;">
                    <div style="display:flex;justify-content:space-between;font-weight:700;font-size:1.1rem;color:var(--brown);">
                        <span>Total</span>
                        <span>${total.toLocaleString()} ETB</span>
                    </div>
                </div>
                <p style="margin-bottom:16px;color:var(--text-light);font-size:0.9rem;">
                    <i class="fas fa-info-circle" style="color:var(--gold-dark);"></i>
                    After payment, your order will be confirmed and you'll receive a confirmation via WhatsApp.
                </p>
                <button class="btn btn-primary btn-block" onclick="alert('Chapa payment integration ready. Add your API key to js/script.js to activate.')">
                    <i class="fas fa-lock"></i> Pay with Chapa (${total.toLocaleString()} ETB)
                </button>
                <p style="margin-top:12px;font-size:0.8rem;color:var(--text-lighter);">
                    <i class="fas fa-shield-alt"></i> Secure payment powered by Chapa
                </p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}
window.processChapaPayment = function() {
    const name = document.getElementById('chapaName').value;
    const email = document.getElementById('chapaEmail').value;
    const phone = document.getElementById('chapaPhone').value;

    if (!name || !email || !phone) {
        showToast('error', 'Required', 'Please fill all fields');
        return;
    }

    const orderData = JSON.parse(sessionStorage.getItem('mag_pending_order'));

    // Save order to localStorage (for admin to see)
    const orders = JSON.parse(localStorage.getItem('mag_orders')) || [];
    orders.push({
        ...orderData,
        customer: { name, email, phone },
        status: 'paid_pending_verification',
        date: new Date().toISOString()
    });
    localStorage.setItem('mag_orders', JSON.stringify(orders));

    // Clear cart
    cart = [];
    saveCart();
    updateCart();

    // Close modal and show success
    document.getElementById('chapaModal')?.remove();
    showToast('success', 'Order Placed!', 'Your order has been received. We will confirm with you shortly.');

    // In production, this would call your backend to initialize Chapa:
    // fetch('/api/chapa/initialize', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ amount: orderData.total, email, first_name: name, phone, tx_ref: orderData.tx_ref })
    // }).then(r => r.json()).then(data => {
    //     if (data.status === 'success') window.location.href = data.data.checkout_url;
    // });
};

// ============================================
// SHOP PAGE
// ============================================
function initShopPage() {
    renderShopProducts();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderShopProducts();
        });
    });

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderShopProducts();
        });
    }

    // Close modal
    if (elements.detailClose) {
        elements.detailClose.addEventListener('click', closeProductDetail);
    }
    if (elements.productDetailModal) {
        elements.productDetailModal.addEventListener('click', (e) => {
            if (e.target === elements.productDetailModal) closeProductDetail();
        });
    }
}

function getFilteredProducts() {
    let filtered = [...products];
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    switch (currentSort) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return filtered;
}

function renderShopProducts() {
    if (!elements.productGrid) return;
    const filtered = getFilteredProducts();

    if (filtered.length === 0) {
        elements.productGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-lighter);">No products found.</div>';
        return;
    }

    elements.productGrid.innerHTML = filtered.map(product => {
        const name = currentLang === 'am' && product.nameAm ? product.nameAm : product.name;
        return `
            <article class="product-card" data-product-id="${product.id}" onclick="openProductDetail(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${name}" loading="lazy">
                    ${product.badge ? `<span class="product-badge ${product.badge === 'sale' ? 'sale' : product.badge === 'new' ? 'new' : ''}">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${name}</h3>
                    <div class="product-price">
                        <span class="current">${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB</span>
                        ${product.originalPrice ? `<span class="original">${product.originalPrice.toLocaleString()} ETB</span>` : ''}
                    </div>
                    <span class="product-order-link">View Details →</span>
                </div>
            </article>
        `;
    }).join('');
}

window.openProductDetail = function(productId) {
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) { product = products[i]; break; }
    }
    if (!product) return;

    var modal = document.getElementById('productDetailModal');
    var content = document.getElementById('detailContent');
    if (!modal || !content) return;

    var name = product.name;
    var images = product.images || [product.image];

    var html = '<div class="detail-layout">';
    html += '<div class="detail-gallery">';
    html += '<div class="detail-main-image"><img src="' + images[0] + '" alt="' + name + '" id="mainDetailImage"></div>';
    html += '<div class="detail-thumbnails">';
    for (var j = 0; j < images.length; j++) {
        html += '<img src="' + images[j] + '" alt="' + name + '" class="detail-thumb' + (j === 0 ? ' active' : '') + '" onclick="var m=document.getElementById(\'mainDetailImage\');m.src=\'' + images[j] + '\';var t=document.querySelectorAll(\'.detail-thumb\');for(var k=0;k<t.length;k++)t[k].classList.remove(\'active\');this.classList.add(\'active\')">';
    }
    html += '</div></div>';
    html += '<div class="detail-info">';
    html += '<div class="product-category">' + product.category + '</div>';
    html += '<h2>' + name + '</h2>';
    html += '<div class="product-price"><span class="current">' + product.price.toLocaleString() + ' ETB</span>';
    if (product.originalPrice) html += '<span class="original">' + product.originalPrice.toLocaleString() + ' ETB</span>';
    html += '</div>';
    html += '<p style="color:var(--text-light);line-height:1.8;margin:16px 0;">' + product.description + '</p>';
    html += '<h4 style="margin:20px 0 8px;color:var(--brown);">Select Size</h4>';
    html += '<div class="size-options">';
    for (var s = 0; s < product.sizes.length; s++) {
        html += '<button class="size-btn' + (s === 0 ? ' active' : '') + '" data-size="' + product.sizes[s] + '">' + product.sizes[s] + '</button>';
    }
    html += '</div>';
    html += '<h4 style="margin:20px 0 8px;color:var(--brown);">Quantity</h4>';
    html += '<div class="quantity-selector"><button class="quantity-btn" id="detailQtyMinus">−</button><span class="quantity-value" id="detailQtyValue">1</span><button class="quantity-btn" id="detailQtyPlus">+</button></div>';
    html += '<div style="margin-top:24px;display:flex;gap:12px;"><button class="btn btn-primary btn-block" id="detailAddToCart">Add to Cart</button></div>';
    html += '<div style="margin-top:16px;"><a href="index.html#order" class="btn btn-outline btn-block" target="_blank">Order This Now</a></div>';
    html += '</div></div>';

    content.innerHTML = html;

    // Size selection
    var sizeBtns = content.querySelectorAll('.size-btn');
    var selectedSize = product.sizes[0];
    for (var b = 0; b < sizeBtns.length; b++) {
        sizeBtns[b].onclick = function() {
            for (var x = 0; x < sizeBtns.length; x++) sizeBtns[x].classList.remove('active');
            this.classList.add('active');
            selectedSize = this.getAttribute('data-size');
        };
    }

    // Quantity
    var quantity = 1;
    var qtyValue = document.getElementById('detailQtyValue');
    document.getElementById('detailQtyMinus').onclick = function() { if (quantity > 1) { quantity--; qtyValue.textContent = quantity; } };
    document.getElementById('detailQtyPlus').onclick = function() { quantity++; qtyValue.textContent = quantity; };

    // Add to cart
    document.getElementById('detailAddToCart').onclick = function() { addToCart(product.id, selectedSize, quantity); };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closeProductDetail() {
    if (elements.productDetailModal) elements.productDetailModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// DARK MODE
// ============================================
function initDarkMode() {
    const saved = localStorage.getItem('mag_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateDarkModeIcon(saved);

    if (elements.darkToggle) {
        elements.darkToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('mag_theme', next);
            updateDarkModeIcon(next);
        });
    }
}

function updateDarkModeIcon(theme) {
    if (elements.darkToggle) {
        const icon = elements.darkToggle.querySelector('i');
        if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ============================================
// LANGUAGE
// ============================================
function initLanguage() {
    if (elements.langToggle) {
        elements.langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'am' : 'en';
            localStorage.setItem('mag_lang', currentLang);
            document.querySelectorAll('.lang-current').forEach(el => el.textContent = currentLang.toUpperCase());
            if (typeof renderShopProducts === 'function') renderShopProducts();
            updateCart();
        });
    }
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
    if (elements.backToTop) {
        window.addEventListener('scroll', () => {
            elements.backToTop.classList.toggle('visible', window.scrollY > 500);
        });
        elements.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const hero = document.querySelector('.hero');
    if (hero) { hero.style.opacity = '1'; hero.style.transform = 'translateY(0)'; }
}

// ============================================
// SWIPER
// ============================================
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.hero-swiper', {
            loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            slidesPerView: 3,
            spaceBetween: 10,
            breakpoints: { 0: { slidesPerView: 2 }, 480: { slidesPerView: 3 } }
        });
    }
}

// ============================================
// ADMIN PAGE
// ============================================
function initAdminPage() {
    // Admin page logic is in admin.html inline script
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(type, title, message) {
    if (!elements.toastContainer) return;
    const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="${icons[type] || icons.success}"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            ${message ? `<div class="toast-message">${message}</div>` : ''}
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    elements.toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// ORDER FORM MODAL (after cart approval)
// ============================================
function showOrderFormModal() {
    var modal = document.getElementById('orderModal');
    var content = document.getElementById('orderModalContent');
    if (!modal || !content) return;
    var total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    content.innerHTML = `
        <h2 style="font-family:var(--font-display);color:var(--brown);margin-bottom:20px;">Place Your Order</h2>
        <div style="background:var(--cream);border-radius:var(--radius);padding:16px;margin-bottom:24px;">
            <h4 style="margin-bottom:12px;color:var(--brown);">Order Summary (${cart.length} items)</h4>
            ${cart.map(item => `
                <div style="display:flex;justify-content:space-between;padding:6px 0;font-size:0.9rem;border-bottom:1px solid var(--border-light);">
                    <span>${item.name} (${item.size}) x${item.quantity}</span>
                    <span style="font-weight:600">${(item.price * item.quantity).toLocaleString()} ETB</span>
                </div>
            `).join('')}
            <div style="display:flex;justify-content:space-between;padding:12px 0 0;font-weight:700;font-size:1.1rem;color:var(--brown);">
                <span>Total</span>
                <span>${total.toLocaleString()} ETB</span>
            </div>
        </div>
        <form id="orderFormModal">
            <div class="form-row" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div class="form-group">
                    <label>Full Name *</label>
                    <input type="text" id="orderName" name="name" placeholder="Your name" required>
                </div>
                <div class="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" id="orderPhone" name="phone" placeholder="+251 9XX XXX XXX" required>
                </div>
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" id="orderEmail" name="email" placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label>Country *</label>
                <select id="orderCountry" name="country" required>
                    <option value="">Select country</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Somalia">Somalia</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label>Message / Measurements</label>
                <textarea id="orderMessage" name="message" rows="3" placeholder="Size, color preference, or any special requests..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
                <span>Place Order & Pay with Chapa</span>
                <i class="fas fa-lock"></i>
            </button>
        </form>
        <div class="form-success" id="formSuccessModal" style="display:none;margin-top:16px;">
            <i class="fas fa-check-circle" style="font-size:2rem;color:var(--success);"></i>
            <p style="color:var(--success);font-weight:600;margin-top:8px;">Order placed! Redirecting to payment...</p>
        </div>
    `;

    // Handle form submission
    var form = document.getElementById('orderFormModal');
    form.onsubmit = function(e) {
        e.preventDefault();
        var formData = new FormData(form);
        var data = Object.fromEntries(formData.entries());
        data.date = new Date().toISOString();
        data.cartItems = cart;
        data.total = total;
        data.status = 'pending_payment';
        data.tx_ref = 'mag_' + Date.now();

        // Save order for admin
        var orders = JSON.parse(localStorage.getItem('mag_orders')) || [];
        orders.push(data);
        localStorage.setItem('mag_orders', JSON.stringify(orders));

        // Show success
        document.getElementById('formSuccessModal').style.display = 'block';
        showToast('success', 'Order Placed!', 'Redirecting to Chapa payment...');

        // Clear cart and redirect to Chapa
        setTimeout(function() {
            cart = [];
            saveCart();
            updateCart();
            initiateChapaPayment(total, cart, data.tx_ref, data);
        }, 1500);
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// NEWSLETTER
// ============================================
if (elements.newsletterForm) {
    elements.newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('success', 'Subscribed!', 'You will receive our latest updates.');
        this.reset();
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
});
