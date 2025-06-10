import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="dashboard contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Address</h3>
          <p>No 2. Fatesin Street by Leha Road<br />
            Off City College, Mararaba,<br />
            Nasarawa State, Nigeria
          </p>

          <h3>Email</h3>
          <p> samkokomediainitiative@gmail.com</p>

          <h3>Phone</h3>
          <p>+2348051709865</p>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;