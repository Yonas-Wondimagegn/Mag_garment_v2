/**
 * CONFIGURATION - Copy this to config.js and fill in your values
 * DO NOT commit config.js to version control!
 */

const CONFIG = {
    // Chapa Payment API (https://chapa.co)
    CHAPA_SECRET_KEY: 'YOUR_CHAPA_SECRET_KEY_HERE',
    CHAPA_PUBLIC_KEY: 'YOUR_CHAPA_PUBLIC_KEY_HERE',
    CHAPA_API_URL: 'https://api.chapa.co/v1/transaction/initialize',
    CHAPA_VERIFY_URL: 'https://api.chapa.co/v1/transaction/verify/',

    // Admin
    ADMIN_PASSWORD: 'mag2025',

    // Business Info
    BUSINESS_NAME: 'Mag Garment',
    BUSINESS_EMAIL: 'maggarment@gmail.com',
    BUSINESS_PHONE: '+251917798081',
    BUSINESS_ADDRESS: 'Bole Road, Addis Ababa, Ethiopia',
    WHATSAPP_LINK: 'https://wa.me/251917798081',

    // Currency
    CURRENCY: 'ETB',
    USD_RATE: 57, // 1 USD = 57 ETB (approximate)

    // Shipping
    FREE_SHIPPING_THRESHOLD: 2000, // ETB
};
