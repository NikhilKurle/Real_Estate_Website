import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="page-header">
        <div className="container text-center">
          <h1>Get in Touch</h1>
          <p className="text-muted">We're here to help you find your dream home</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="grid contact-grid">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="text-muted mb-8">Whether you're looking to buy, sell, or invest, our team of luxury real estate experts is ready to assist you.</p>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h3>Headquarters</h3>
                  <p className="text-muted">123 Luxury Avenue<br />Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h3>Phone</h3>
                  <p className="text-muted">+1 (800) 123-4567<br />+1 (310) 555-0199</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h3>Email</h3>
                  <p className="text-muted">info@primenest.com<br />sales@primenest.com</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><Clock size={24} /></div>
                <div>
                  <h3>Business Hours</h3>
                  <p className="text-muted">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <div className="contact-form-card">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="(555) 123-4567" required />
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>Looking to Buy</option>
                    <option>Looking to Sell</option>
                    <option>Investment Opportunities</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
