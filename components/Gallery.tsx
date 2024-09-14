'use client';

import Image from 'next/image';
import { useState } from 'react';

const photos = [
    '/collage/IMG_4896.jpg',
    '/collage/image.png',
    '/collage/IMG_4922.jpg',
    '/images/Image5.jpg',
    '/collage/IMG_4906.jpg',
    '/collage/IMG_4871.jpg',
    '/collage/IMG_4901.jpg',
    '/collage/IMG_4912.jpg',
    '/collage/IMG_4885.jpg',
    '/collage/IMG_4914.jpg',
    '/collage/IMG_4869.jpg',
    '/images/Image7.jpg',
];

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    const initialPhotos = 4;
    const visiblePhotos = showAll ? photos : photos.slice(0, initialPhotos);

    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleHide = () => {
        setShowAll(false);
    };

    return (
        <div className="p-4 bg-party-popper relative overflow-hidden z-0">
            <h2 className="text-center text-4xl font-bold mb-6 text-black drop-shadow-lg z-10 relative">Gallery</h2>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto relative z-10 transition-max-height duration-500 ease-in-out overflow-hidden ${showAll ? 'max-h-full' : 'max-h-[600px]'}`}>
                {visiblePhotos.map((photo, index) => (
                    <div key={index} className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg border-4 border-white bg-gray-100 transition-transform transform hover:scale-105 group z-10">
                        <Image
                            src={photo}
                            alt={`Photo ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 border-4 border-gray-300 rounded-lg pointer-events-none"></div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4 z-10 relative">
                {!showAll && photos.length > initialPhotos && (
                    <button
                        onClick={handleShowMore}
                        className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-500 transition-transform transform hover:scale-105"
                    >
                        Show More
                    </button>
                )}
                {showAll && (
                    <button
                        onClick={handleHide}
                        className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition-transform transform hover:scale-105 ml-4"
                    >
                        Hide
                    </button>
                )}
            </div>
            <style jsx>{`
                .bg-party-popper {
                    position: relative;
                    overflow: hidden;
                }
                .bg-party-popper::before,
                .bg-party-popper::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: -1; /* Ensures background stays behind content */
                    background: 
                        radial-gradient(circle at 5% 5%, #ff9999 10%, transparent 10%),
                        radial-gradient(circle at 15% 10%, #99ff99 12%, transparent 12%),
                        radial-gradient(circle at 25% 20%, #9999ff 14%, transparent 14%),
                        radial-gradient(circle at 35% 30%, #ffcc99 16%, transparent 16%),
                        radial-gradient(circle at 45% 40%, #ff9999 18%, transparent 18%),
                        radial-gradient(circle at 55% 50%, #99ff99 20%, transparent 20%),
                        radial-gradient(circle at 65% 60%, #9999ff 22%, transparent 22%),
                        radial-gradient(circle at 75% 70%, #ffcc99 24%, transparent 24%),
                        radial-gradient(circle at 85% 80%, #ff9999 26%, transparent 26%),
                        radial-gradient(circle at 95% 90%, #99ff99 28%, transparent 28%),
                        radial-gradient(circle at 10% 25%, #9999ff 30%, transparent 30%),
                        radial-gradient(circle at 20% 35%, #ffcc99 32%, transparent 32%),
                        radial-gradient(circle at 30% 45%, #ff9999 34%, transparent 34%),
                        radial-gradient(circle at 40% 55%, #99ff99 36%, transparent 36%),
                        radial-gradient(circle at 50% 65%, #9999ff 38%, transparent 38%),
                        radial-gradient(circle at 60% 75%, #ffcc99 40%, transparent 40%),
                        radial-gradient(circle at 70% 85%, #ff9999 42%, transparent 42%),
                        radial-gradient(circle at 80% 95%, #99ff99 44%, transparent 44%),
                        radial-gradient(circle at 90% 15%, #9999ff 46%, transparent 46%),
                        radial-gradient(circle at 5% 75%, #ffcc99 48%, transparent 48%),
                        radial-gradient(circle at 15% 85%, #ff9999 50%, transparent 50%),
                        radial-gradient(circle at 25% 95%, #99ff99 52%, transparent 52%),
                        radial-gradient(circle at 35% 15%, #9999ff 54%, transparent 54%),
                        radial-gradient(circle at 45% 25%, #ffcc99 56%, transparent 56%),
                        radial-gradient(circle at 55% 35%, #ff9999 58%, transparent 58%),
                        radial-gradient(circle at 65% 45%, #99ff99 60%, transparent 60%),
                        radial-gradient(circle at 75% 55%, #9999ff 62%, transparent 62%),
                        radial-gradient(circle at 85% 65%, #ffcc99 64%, transparent 64%),
                        radial-gradient(circle at 95% 75%, #ff9999 66%, transparent 66%),
                        radial-gradient(circle at 10% 85%, #99ff99 68%, transparent 68%),
                        radial-gradient(circle at 20% 95%, #9999ff 70%, transparent 70%),
                        radial-gradient(circle at 30% 15%, #ffcc99 72%, transparent 72%),
                        radial-gradient(circle at 40% 25%, #ff9999 74%, transparent 74%),
                        radial-gradient(circle at 50% 35%, #99ff99 76%, transparent 76%),
                        radial-gradient(circle at 60% 45%, #9999ff 78%, transparent 78%),
                        radial-gradient(circle at 70% 55%, #ffcc99 80%, transparent 80%);
                    background-size: 5% 5%, 10% 10%, 15% 15%, 20% 20%, 25% 25%, 30% 30%, 35% 35%, 40% 40%, 45% 45%, 50% 50%, 55% 55%, 60% 60%, 65% 65%, 70% 70%, 75% 75%, 80% 80%, 85% 85%, 90% 90%, 95% 95%, 100% 100%;
                    background-position: 0% 0%, 10% 10%, 20% 20%, 30% 30%, 40% 40%, 50% 50%, 60% 60%, 70% 70%, 80% 80%, 90% 90%, 5% 80%, 15% 90%, 25% 0%, 35% 10%, 45% 20%, 55% 30%, 65% 40%, 75% 50%, 85% 60%, 95% 70%, 10% 80%, 20% 90%, 30% 0%, 40% 10%, 50% 20%, 60% 30%, 70% 40%, 80% 50%, 90% 60%, 5% 70%, 15% 80%, 25% 90%, 35% 0%, 45% 10%, 55% 20%, 65% 30%, 75% 40%, 85% 50%, 95% 60%, 10% 70%, 20% 80%, 30% 90%, 40% 0%, 50% 10%, 60% 20%, 70% 30%, 80% 40%, 90% 50%, 5% 60%;
                    background-repeat: no-repeat;
                }
            `}</style>
        </div>
    );
};

export default Gallery;
