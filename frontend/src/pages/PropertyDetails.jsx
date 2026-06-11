import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Check } from 'lucide-react';
import propertiesData from '../data/properties.json';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find(p => p.id === id);

  if (!property) {
    return (
      <div className="section text-center" style={{paddingTop: '160px'}}>
        <h2>Property Not Found</h2>
        <Link to="/properties" className="btn btn-primary mt-12">Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="property-details-page animate-fade-in">
      {/* Gallery Header */}
      <div className="details-header">
        <div className="gallery-main">
          <img src={property.images[0]} alt={property.title} />
        </div>
      </div>

      <div className="container section pt-0 details-content">
        <div className="grid details-grid">
          {/* Main Info */}
          <div className="details-main">
            <div className="details-title-section">
              <div className="details-location">
                <MapPin size={18} />
                <span>{property.location}</span>
              </div>
              <h1>{property.title}</h1>
              <div className="details-price">${property.price.toLocaleString()}</div>
            </div>

            <div className="details-features-bar">
              <div className="feature-item">
                <Bed size={24} />
                <div>
                  <strong>{property.bedrooms}</strong>
                  <span>Bedrooms</span>
                </div>
              </div>
              <div className="feature-item">
                <Bath size={24} />
                <div>
                  <strong>{property.bathrooms}</strong>
                  <span>Bathrooms</span>
                </div>
              </div>
              <div className="feature-item">
                <Square size={24} />
                <div>
                  <strong>{property.sqft.toLocaleString()}</strong>
                  <span>Square Feet</span>
                </div>
              </div>
            </div>

            <div className="details-description">
              <h3>About this Property</h3>
              <p>{property.description}</p>
            </div>

            <div className="details-amenities">
              <h3>Amenities</h3>
              <ul className="amenities-list">
                {property.amenities.map(amenity => (
                  <li key={amenity}>
                    <Check size={18} className="text-primary" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="details-sidebar">
            <div className="contact-card">
              <h3>Schedule a Visit</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="date" required />
                <textarea placeholder="Message (Optional)" rows="4"></textarea>
                <button type="submit" className="btn btn-primary w-100">Request Schedule</button>
              </form>
              
              <div className="agent-info">
                <div className="agent-avatar">A</div>
                <div>
                  <h4>Contact Agent</h4>
                  <p>+1 (800) 555-0199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
