// Image configuration file
// Import all your project images here and export them with unique names

// Example imports (uncomment and modify based on your actual images)
// import heroImage from '/public/images/hero-image.jpg';
// import logo from '/public/images/logo.png';
// import backgroundPattern from '/public/images/background-pattern.svg';
// import userAvatar from '/public/images/user-avatar.jpg';
// import productImage from '/public/images/product-image.png';
// import iconHome from '/public/images/icons/home.svg';
// import iconUser from '/public/images/icons/user.svg';
// import iconSettings from '/public/images/icons/settings.svg';

// Export all images with descriptive names
export const images = {
  // Hero section images
  // heroImage,
  // heroBackground: '/images/hero-background.jpg',
  
  // Logo and branding
  // logo,
  // logoWhite: '/images/logo-white.png',
  // logoDark: '/images/logo-dark.png',
  
  // Background patterns and textures
  // backgroundPattern,
  // textureWood: '/images/textures/wood.jpg',
  // textureFabric: '/images/textures/fabric.jpg',
  
  // User interface elements
  // userAvatar,
  // defaultAvatar: '/images/default-avatar.jpg',
  
  // Product images
  // productImage,
  // productPlaceholder: '/images/product-placeholder.jpg',
  
  // Icons
  // iconHome,
  // iconUser,
  // iconSettings,
  // iconSearch: '/images/icons/search.svg',
  // iconMenu: '/images/icons/menu.svg',
  // iconClose: '/images/icons/close.svg',
  
  // Social media icons
  // iconFacebook: '/images/social/facebook.svg',
  // iconTwitter: '/images/social/twitter.svg',
  // iconInstagram: '/images/social/instagram.svg',
  // iconLinkedIn: '/images/social/linkedin.svg',
  
  // Project images from /public/images folder
  nature1: '/images/pexels-absoluteabhi-33810886.jpg',
  nature2: '/images/pexels-ana-85163930-14544776.jpg',
  landscape1: '/images/pexels-axp-photography-500641970-16738855.jpg',
  landscape2: '/images/pexels-axp-photography-500641970-19149579.jpg',
  landscape3: '/images/pexels-axp-photography-500641970-19149580.jpg',
  landscape4: '/images/pexels-axp-photography-500641970-19149585.jpg',
  landscape5: '/images/pexels-axp-photography-500641970-19149587.jpg',
  landscape6: '/images/pexels-axp-photography-500641970-19149606.jpg',
  landscape7: '/images/pexels-axp-photography-500641970-19195934.jpg',
  portrait1: '/images/pexels-mrudula-thakur-256463-784885.jpg',
  portrait2: '/images/pexels-mukul-parashar-1278166-3588650.jpg',
  portrait3: '/images/pexels-parv-choudhary-724334-2846071.jpg',
  urban1: '/images/pexels-rehanverma-2588193.jpg',
  urban2: '/images/pexels-rehanverma-2613015.jpg',
  modern1: '/images/pexels-ryan-thomas-307183342-33777271.jpg',
  modern2: '/images/pexels-sbsoneji-3581368.jpg',
  architecture1: '/images/pexels-stijn-dijkstra-1306815-16744870.jpg',
  architecture2: '/images/pexels-stijn-dijkstra-1306815-16745021.jpg',
} as const;

// Type for image keys (helps with TypeScript autocomplete)
export type ImageKey = keyof typeof images;

// Helper function to get image path
export const getImagePath = (key: ImageKey): string => {
  return images[key];
};

// Helper function to get all image keys
export const getAllImageKeys = (): ImageKey[] => {
  return Object.keys(images) as ImageKey[];
};

// Helper function to get images by category
export const getImagesByCategory = (category: string): Partial<typeof images> => {
  return Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(category))
  );
};