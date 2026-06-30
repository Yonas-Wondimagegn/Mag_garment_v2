# Mag Garment V2 

Ethiopian fashion ecommerce website - handcrafted in Addis Ababa worn across the world

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Yonas-Wondimagegn/Mag_garment_v2.git
cd Mag_garment_v2

# Start a local server
python -m http.server 8080

# Open in browser
# http://127.0.0.1:8080
```

## Setup

### 1. Configure API Keys

Copy the config template and fill in your values:

```bash
cp config.example.js config.js
```

Edit `config.js` and add your credentials:

```javascript
const CONFIG = {
    CHAPA_SECRET_KEY: 'your_actual_chapa_secret_key',
    CHAPA_PUBLIC_KEY: 'your_chapa_public_key',
    ADMIN_PASSWORD: 'your_secure_password',
    // ... other settings
};
```

### 2. Chapa Payment Setup

1. Sign up at [https://chapa.co](https://chapa.co)
2. Get your API key from the Chapa dashboard
3. Add it to `config.js`
4. Uncomment the fetch code in `initiateChapaPayment()` in `js/script.js`

### 3. Admin Panel

- URL: `/admin.html`
- Default password: `mag2025` (change in `config.js`)

## Project Structure

```
├── index.html          # Home page
├── shop.html           # Product listing
├── product.html        # Product detail page
├── admin.html          # Admin panel (password protected)
├── config.js           # API keys & settings (git-ignored)
├── config.example.js   # Config template
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # All JavaScript
└── images/             # Product images
```

## Features

- Shopping cart with persistent storage
- Chapa payment integration
- Responsive design
- Dark mode toggle
- Bilingual (English/Amharic)
- Admin panel for product & order management
- Order tracking
- WhatsApp integration

## Security

**Never commit `config.js` to version control**

All sensitive keys are stored in `config.js` which is included in `.gitignore`
