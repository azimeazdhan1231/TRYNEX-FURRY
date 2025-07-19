
// Environment configuration
window.ENV = {
    // Supabase Configuration
    SUPABASE_URL: '',
    SUPABASE_ANON_KEY: '',
    
    // Site Configuration
    SITE_URL: window.location.origin,
    
    // Email Configuration (for Netlify Functions)
    ADMIN_EMAIL: 'admin@trynexlifestyle.com',
    
    // Development mode
    IS_DEVELOPMENT: window.location.hostname === 'localhost' || window.location.hostname.includes('replit'),
    
    // API endpoints
    API_BASE: window.location.origin
};

// Load environment variables from Netlify (if available)
if (window.netlifyIdentity) {
    // This would be populated by Netlify's environment variables
    console.log('Netlify environment detected');
}

console.log('Environment configuration loaded');
