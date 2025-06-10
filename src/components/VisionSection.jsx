import React from 'react';
import { FaLightbulb, FaDonate } from 'react-icons/fa'; // icons for vision and donate
import '../styles/visionsection.css'; // we'll create styles here

const VisionSection = () => {
  return (
    <section className="vision-section" style={{ marginTop:'3rem',marginBottom:'3rem'}}>
      <div className="vision-container">
        <div className="icon-wrapper">
          <FaLightbulb size={48} color="#FFD700" />
        </div>
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-text">
          At SAMKOKO MEDIA INITIATIVE, we believe in empowering the youth through
          education, mentorship, and hands-on skills training in technology, media,
          and the arts. Our vision is a community where every young person has
          access to the tools and support they need to unlock their potential,
          innovate fearlessly, and shape a brighter future.
        </p>
        <p className="vision-text">
          Your support helps us deliver impactful programs—from digital literacy
          workshops to creative bootcamps—that transform lives and open doors to
          opportunity. Together, we can spark change and build a generation ready
          to lead.
        </p>
        <button
          className="donate-btn"
          onClick={() => {
            window.location.href = '/donate'; // or your donate page route
          }}
          aria-label="Donate to support our cause"
        >
          <FaDonate size={20} style={{ marginRight: '8px' }} />
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default VisionSection;