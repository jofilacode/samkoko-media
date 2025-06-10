import React, { useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import VisionSection from '../components/VisionSection';
import GalleryModal from '../components/GalleryModal';

// Import icons from react-icons (make sure to install react-icons with npm/yarn)
import { FaHandHoldingHeart, FaLaptopCode, FaSchool, FaUserFriends, FaHandsHelping, FaTools } from 'react-icons/fa';

const objectivesData = [
  { icon: <FaHandHoldingHeart />, text: "Promote poverty alleviation via education & healthcare." },
  { icon: <FaLaptopCode />, text: "Empower youth with IT, coding & digital skills." },
  { icon: <FaSchool />, text: "Establish tech hubs, libraries & learning centers." },
  { icon: <FaUserFriends />, text: "Provide mentorship, scholarships & career support." },
  { icon: <FaHandsHelping />, text: "Collaborate with institutions for inclusive tech education." },
  { icon: <FaTools />, text: "Facilitate vocational & logistics training for youth." },
];

const Home = () => {
    
   
  return (
    <div className="dashboard home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
           
            <h3>SAMKOKO MEDIA INITIATIVE</h3>
            <p style={{fontSize:'13px'}}>
              Empowering Youth and Children through Education, Technology, and Vocational Skills.
            </p>
            <div className="hero-buttons">
              <Link to="/programs" className="btn green">Explore Programs</Link>
              <Link to="/donate" className="btn yellow">Donate Now</Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/banner.jpg"
              alt="Empowerment Training"
            />
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <h2 style={{fontSize:'22px'}}>Our Objectives</h2>
        <div className="objectives-grid">
          {objectivesData.map(({ icon, text }, idx) => (
            <div className="objective-card" key={idx}>
              <div className="icon">{icon}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <Link to="/programs" className="btn see-programs-btn">See Our Programs</Link>

        <VisionSection />
     

      <GalleryModal/>
      </section>

    </div>
  );
};

export default Home;