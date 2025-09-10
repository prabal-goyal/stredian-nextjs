// Example of how to use the images configuration
import Image from 'next/image';
import { images, getImagePath, type ImageKey } from '@/config/images';

export default function ImageUsageExample() {
  // Method 1: Direct access to images object
  const heroImage = images.nature1; // Using actual image key

  // Method 2: Using the helper function
  const logoPath = getImagePath('nature1' as ImageKey);

  return (
    <div className="image-examples">
      <h2>Image Usage Examples</h2>
      
      {/* Using Next.js Image component */}
      <Image
        src={images.nature1}
        alt="Placeholder image"
        width={300}
        height={200}
        priority
      />
      
      {/* Using regular img tag */}
      <img 
        src={logoPath} 
        alt="Logo" 
        style={{ width: '100px', height: '50px' }}
      />
      
      {/* Dynamic image selection */}
      <Image
        src={getImagePath('nature1' as ImageKey)}
        alt="Dynamic image"
        width={200}
        height={150}
      />
    </div>
  );
}

// Example of how to use images in different components
export function HeroSection() {
  return (
    <section className="hero">
      <Image
        src={images.nature1} // Replace with 'heroImage' when you add it
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="hero-content">
        <h1>Welcome to Our Site</h1>
      </div>
    </section>
  );
}

export function Logo() {
  return (
    <Image
      src={images.nature1} // Replace with 'logo' when you add it
      alt="Company Logo"
      width={120}
      height={60}
      priority
    />
  );
}
