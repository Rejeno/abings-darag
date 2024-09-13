import React from 'react';

const photos = [
    '/images/i1.jpg',
    '/images/i2.jpg',
    '/images/i3.jpg',
    '/images/i4.jpg',
    '/images/i5.jpg',
    '/images/photo6.jpg',
    '/images/photo7.jpg',
    '/images/photo8.jpg',
    '/images/photo9.jpg',
    '/images/photo10.jpg',
    '/images/photo11.jpg',
    '/images/photo12.jpg',
];

const Gallery = () => {
    return (
        <div className="gallery">
            {photos.map((photo, index) => (
                <div key={index} className="gallery-item">
                    <img src={photo} alt={`Photo ${index + 1}`} />
                </div>
            ))}
            <style jsx>{`
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr); /* 4 columns */
                    gap: 8px; /* Gap between photos */
                    justify-items: center; /* Center items horizontally */
                    align-items: center; /* Center items vertically */
                    margin: 0 auto; /* Center the entire gallery */
                    max-width: 1500px; /* Optional: Set a max-width for the gallery */
                }
                .gallery-item {
                    width: 100%;
                    overflow: hidden;
                }
                .gallery-item img {
                    width: 100%;
                    border-radius: 8px;
                    height: 300px; /* Increased height for larger images */
                    object-fit: cover; /* Ensure images cover their container */
                }
                @media (max-width: 768px) {
                    .gallery {
                        grid-template-columns: repeat(2, 1fr); /* Adjust to 2 columns on smaller screens */
                    }
                    .gallery-item img {
                        height: 200px; /* Adjusted height for smaller screens */
                    }
                }
                @media (max-width: 480px) {
                    .gallery {
                        grid-template-columns: repeat(1, 1fr); /* Adjust to 1 column on very small screens */
                    }
                    .gallery-item img {
                        height: 150px; /* Smaller height for very small screens */
                    }
                }
            `}</style>
        </div>
    );
};

export default Gallery;
