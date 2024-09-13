import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/images/photo1.jpg', '/images/photo2.jpg', '/images/photo3.jpg',
  '/images/photo4.jpg', '/images/photo5.jpg', '/images/photo6.jpg',
  '/images/photo7.jpg', '/images/photo8.jpg', '/images/photo9.jpg',
  '/images/photo10.jpg', '/images/photo11.jpg', '/images/photo12.jpg'
];

export default function PhotoCollage() {
  // Initialize state with type number or null
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div
          key={index}
          className={`relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg transition-transform duration-300 ${hovered === index ? 'scale-110' : 'scale-100'}`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <Image
            src={src}
            alt={`Photo ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      ))}
    </div>
  );
}
