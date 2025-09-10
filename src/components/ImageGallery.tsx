"use client";
import Image from 'next/image';
import { images, getAllImageKeys } from '@/config/images';
import { useRef, useEffect } from 'react';

export default function ImageGallery() {
  // Get all available image keys
  const imageKeys = getAllImageKeys();
  
  // Calculate how many images per column
  const imagesPerColumn = Math.ceil(imageKeys.length / 3);
  
  // Split images into 3 columns
  const column1 = imageKeys.slice(0, imagesPerColumn);
  const column2 = imageKeys.slice(imagesPerColumn, imagesPerColumn * 2);
  const column3 = imageKeys.slice(imagesPerColumn * 2);

  // Refs for all columns
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

  // Handle synchronized scrolling
  const handleColumn1Scroll = () => {
    if (column1Ref.current && column2Ref.current) {
      const scrollTop = column1Ref.current.scrollTop;
      const maxScroll = column1Ref.current.scrollHeight - column1Ref.current.clientHeight;
      const scrollPercentage = scrollTop / maxScroll;

      // Calculate opposite scroll position for column 2
      const column2MaxScroll = column2Ref.current.scrollHeight - column2Ref.current.clientHeight;
      column2Ref.current.scrollTop = column2MaxScroll * (1 - scrollPercentage);
    }
  };

  const handleColumn2Scroll = () => {
    if (column1Ref.current && column2Ref.current && column3Ref.current) {
      const scrollTop = column2Ref.current.scrollTop;
      const maxScroll = column2Ref.current.scrollHeight - column2Ref.current.clientHeight;
      const scrollPercentage = scrollTop / maxScroll;

      // Calculate opposite scroll position for column 1
      const column1MaxScroll = column1Ref.current.scrollHeight - column1Ref.current.clientHeight;
      column1Ref.current.scrollTop = column1MaxScroll * (1 - scrollPercentage);

      // Calculate opposite scroll position for column 3
      const column3MaxScroll = column3Ref.current.scrollHeight - column3Ref.current.clientHeight;
      column3Ref.current.scrollTop = column3MaxScroll * (1 - scrollPercentage);
    }
  };

  const handleColumn3Scroll = () => {
    if (column2Ref.current && column3Ref.current) {
      const scrollTop = column3Ref.current.scrollTop;
      const maxScroll = column3Ref.current.scrollHeight - column3Ref.current.clientHeight;
      const scrollPercentage = scrollTop / maxScroll;

      // Calculate opposite scroll position for column 2
      const column2MaxScroll = column2Ref.current.scrollHeight - column2Ref.current.clientHeight;
      column2Ref.current.scrollTop = column2MaxScroll * (1 - scrollPercentage);
    }
  };

  // Set up scroll event listeners
  useEffect(() => {
    const column1Element = column1Ref.current;
    const column2Element = column2Ref.current;
    const column3Element = column3Ref.current;

    if (column1Element) {
      column1Element.addEventListener('scroll', handleColumn1Scroll);
    }
    if (column2Element) {
      column2Element.addEventListener('scroll', handleColumn2Scroll);
    }
    if (column3Element) {
      column3Element.addEventListener('scroll', handleColumn3Scroll);
    }

    // Cleanup
    return () => {
      if (column1Element) {
        column1Element.removeEventListener('scroll', handleColumn1Scroll);
      }
      if (column2Element) {
        column2Element.removeEventListener('scroll', handleColumn2Scroll);
      }
      if (column3Element) {
        column3Element.removeEventListener('scroll', handleColumn3Scroll);
      }
    };
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[100vh]">
        {/* Column 1 */}
        <div ref={column1Ref} className="space-y-8 overflow-y-auto scrollbar-thin" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {column1.map((imageKey) => (
            <div key={imageKey} className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={images[imageKey]}
                  alt={`${imageKey} image`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div ref={column2Ref} className="space-y-8 overflow-y-auto scrollbar-thin" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {column2.map((imageKey) => (
            <div key={imageKey} className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={images[imageKey]}
                  alt={`${imageKey} image`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div ref={column3Ref} className="space-y-8 overflow-y-auto scrollbar-thin" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {column3.map((imageKey) => (
            <div key={imageKey} className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={images[imageKey]}
                  alt={`${imageKey} image`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
