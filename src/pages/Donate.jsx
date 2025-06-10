import '../styles/donate.css';

const Donate = () => {
  return (
    <div className="dashboard donate-page">
      <div className="donate-header">
        <h1>Support Our Cause</h1>
        <p>
          Every donation helps us train, equip, and uplift youth between ages 12–35 through technology,
          mentorship, education, and vocational skills. Thank you for building a wealthy society with us.
        </p>
      </div>

      <div className="donate-options">
        <div className="donate-box">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968773.png" alt="Paypal" />
          <h3>Donate via PayPal</h3>
          <a href="https://www.paypal.com/donate" target="_blank" rel="noreferrer" className="donate-btn">Donate Now</a>
        </div>

        <div className="donate-box">
          <img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" alt="Bank Transfer" />
          <h3>Bank Transfer</h3>
          <p><strong>Account Name:</strong> Samkoko Media Initiative</p>
          <p><strong>Account Number:</strong> 1234567890</p>
          <p><strong>Bank:</strong> Providus Bank Nigeria</p>
        </div>

        <div className="donate-box">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="Card Payment" />
          <h3>Donate via Card</h3>
          <a href="https://example-payment-link.com" target="_blank" rel="noreferrer" className="donate-btn">Pay with Card</a>
        </div>
      </div>
    </div>
  );
};

export default Donate;