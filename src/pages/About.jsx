import '../styles/about.css';

const About = () => {
  return (
    <div className="dashboard about-page">

      {/* Banner */}
      <div className="about-banner">
        <img
          src="/banner.jpg"
          alt="About SAMKOKO"
        />
        <div className="overlay">
          <h1>About SAMKOKO MEDIA INITIATIVE</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="about-intro">
        <p>
          SAMKOKO MEDIA INITIATIVE is a youth-focused organization that provides empowerment through education, digital literacy, and vocational training for individuals between the ages of 12 to 35. Our programs are designed to build sustainable futures by equipping young people with essential 21st-century skills.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To empower children and youth by providing access to quality education, health care, social support, and technological training, preparing them for a productive and innovative future.
          </p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            A society where every youth is digitally literate, economically independent, and capable of contributing meaningfully to national development.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <h2>Core Values</h2>
        <ul>
          <li>📚 Education for Empowerment</li>
          <li>💻 Digital Innovation</li>
          <li>🤝 Community Engagement</li>
          <li>🎯 Professional Growth</li>
          <li>🌍 Sustainable Impact</li>
        </ul>
      </section>

    </div>
  );
};

export default About;
