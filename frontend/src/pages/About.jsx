import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="page-header about-header">
        <div className="container text-center">
          <h1>About OmSai</h1>
          <p className="text-muted" style={{color: '#fff'}}>Excellence in luxury real estate</p>
        </div>
      </div>

      <div className="container section">
        <div className="grid about-grid">
          <div className="about-content">
            <h2>Our Story</h2>
            <p className="text-muted">Founded in 2010, OmSai was born out of a desire to redefine the luxury real estate market. We recognized a need for a brokerage that not only understood the unique nuances of high-end properties but also delivered an unparalleled level of personalized service.</p>
            <p className="text-muted mt-4">Over the past decade, we have grown from a boutique agency in Beverly Hills to an internationally recognized brand, representing some of the most extraordinary properties in the world.</p>
            
            <h2 className="mt-8">Our Mission</h2>
            <p className="text-muted">To connect discerning clients with extraordinary homes while providing a seamless, transparent, and highly personalized real estate experience.</p>
          </div>
          
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="PrimeNest Office" />
          </div>
        </div>
      </div>
      
      <section className="section bg-light text-center">
        <div className="container">
          <h2 className="mb-12">Our Leadership</h2>
          <div className="grid team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="CEO" />
              </div>
              <h3>James Sterling</h3>
              <p className="text-primary">Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="COO" />
              </div>
              <h3>Elena Rodriguez</h3>
              <p className="text-primary">Chief Operating Officer</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Director" />
              </div>
              <h3>Marcus Chen</h3>
              <p className="text-primary">Director of Sales</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
