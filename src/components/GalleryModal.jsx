import React, { useState } from 'react';
import '../styles/gallery.css';

const demoImages = [
  { url: '8.jpg', description: 'Coding Workshop for Teens' },
  { url: '1.jpg', description: 'Digital Literacy Training Session' },
  { url: '2.webp', description: 'Film Production Class in Progress' },
  { url: '7.jpg', description: 'Girls in Tech Bootcamp' },
  { url: '4.jpg', description: 'Youth Mentorship Meetup' },
  { url: '5.jpg', description: 'Happy innovation' },
  { url: '3.jpg', description: 'Tailoring & Fashion Design Class' },
  { url: '6.jpg', description: 'Salon and Makeup Workshop' },
];

const GalleryModal = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % demoImages.length);
  };


  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <p>Explore moments captured at SAMKOKO MEDIA INITIATIVE programs and events.</p>

      <div className="gallery-grid">
        {demoImages.map(({ url, description }, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => handleImageClick(idx)}
            style={{ cursor: 'pointer' }}
          >
            <img src={url} alt={description} />
            <p className="gallery-description">{description}</p>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={demoImages[selectedIndex].url} alt="Preview" />
            <p className="image-description">{demoImages[selectedIndex].description}</p>
            <button className="nav-btn prev" onClick={showPrev} title="Previous">&#10094;</button>
            <button className="nav-btn next" onClick={showNext} title="Next">&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
