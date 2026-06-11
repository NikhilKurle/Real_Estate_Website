import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-card-image">
        <img src={property.images[0]} alt={property.title} />
        <div className="property-card-price">${property.price.toLocaleString()}</div>
        {property.featured && <div className="property-card-badge">Featured</div>}
      </div>
      <div className="property-card-content">
        <div className="property-card-location">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>
        <h3 className="property-card-title">{property.title}</h3>
        <div className="property-card-features">
          <div className="feature">
            <Bed size={18} />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="feature">
            <Bath size={18} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="feature">
            <Square size={18} />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        <Link to={`/properties/${property.id}`} className="btn btn-outline property-card-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
