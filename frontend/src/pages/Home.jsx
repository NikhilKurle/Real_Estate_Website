import { Link } from 'react-router-dom';
import { Search, Shield, Clock, Award } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import propertiesData from '../data/properties.json';
import './Home.css';

const Home = () => {
  const featuredProperties = propertiesData.filter(prop => prop.featured).slice(0, 3);

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Discover Your<br /><span>Perfect Sanctuary</span></h1>
          <p>Experience luxury living with our curated collection of premium properties tailored to your lifestyle.</p>
          
          <div className="hero-search">
            <input type="text" placeholder="Search by location, property type..." />
            <button className="btn btn-primary">
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p className="text-muted">Handpicked selection of our most exclusive homes</p>
          </div>
          
          <div className="grid property-grid">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/properties" className="btn btn-outline">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* Services / Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose PrimeNest</h2>
            <p className="text-muted">We provide an unparalleled real estate experience</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <div className="service-icon"><Shield size={32} /></div>
              <h3>Secure Transactions</h3>
              <p className="text-muted">Your investments are protected with our bank-grade security protocols and trusted legal partners.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Award size={32} /></div>
              <h3>Premium Selection</h3>
              <p className="text-muted">We only list properties that meet our strict criteria for luxury, location, and architectural excellence.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Clock size={32} /></div>
              <h3>24/7 Concierge</h3>
              <p className="text-muted">Our dedicated team is available around the clock to assist you with viewings and negotiations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2 style={{color: 'white'}}>What Our Clients Say</h2>
          </div>
          <div className="grid testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"PrimeNest made finding our dream home in Malibu an absolute breeze. Their attention to detail and premium service is unmatched."</p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div>
                  <h4>Sarah Jenkins</h4>
                  <span className="text-primary">Homeowner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"The level of professionalism and the quality of properties they showed us exceeded all our expectations."</p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div>
                  <h4>Michael Chen</h4>
                  <span className="text-primary">Investor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
