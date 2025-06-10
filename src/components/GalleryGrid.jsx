import React from 'react';
import '../styles/gallery.css';

const demoImages = [
 {
    url: '8.jpg',
    description: 'Coding Workshop for Teens',
  },
  {
    url: '1.jpg',
    description: 'Digital Literacy Training Session',
  },
  {
    url: '2.jpg',
    description: 'Film Production Class in Progress',
  },
  {
    url: '3.jpg',
    description: 'Girls in Tech Bootcamp',
  },
  {
    url: '4.jpg',
    description: 'Youth Mentorship Meetup',
  },
  {
    url: '5.jpg',
    description: '6.jpg',
  },
  {
    url: '7.jpg',
    description: 'Tailoring & Fashion Design Class',
  },
  {
    url: '8.jpg',
    description: 'Salon and Makeup Workshop',
  },
];

const GalleryGrid = ({ onImageClick }) => {
  return (

    <>
   <h1>Gallery</h1>
      <p>Explore moments captured at SAMKOKO MEDIA INITIATIVE programs and events.</p>
    <div className="gallery-grid">
     
      {demoImages.map(({ url, description }, idx) => (
        <div
          key={idx}
          className="gallery-item"
          onClick={() => onImageClick(idx)}
          style={{ cursor: 'pointer' }}
        >
          <img src={url} alt={description} />
          <p className="gallery-description">{description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default GalleryGrid;