import React, { useEffect, useRef } from "react";
import "./Team.scss";

const Team: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="team page">
      {/* Hero Section */}
      <div className="team-hero" ref={heroRef}>
        <div className="hero-content">
          <h1>About Olive Home Co.</h1>
          <p className="hero-subtitle">
            Transforming houses into homes across Utah with expert design, technology, and outdoor living solutions
          </p>
        </div>
      </div>

      <div className="container">
        {/* About Section */}
        <div className="section-header">
          <h2>Our Story</h2>
          <p>
            Olive Home Co. has been dedicated to transforming houses into homes
            across Utah. With our expertise in home decor, technology
            integration, and outdoor living, we've helped hundreds of homeowners
            create spaces they love. Our passion for quality products and
            exceptional service drives everything we do.
          </p>
        </div>

        <div className="grid-2x2">
          <div className="card">
            <h3>Home Interior</h3>
            <p>
              Our interior design experts work with you to create beautiful,
              functional spaces that reflect your lifestyle and personality.
              From concept to completion, we handle every detail.
            </p>
          </div>
          <div className="card">
            <h3>Outdoor Living</h3>
            <p>
              Extend your living space outdoors with our comprehensive outdoor
              solutions. We design and install patios, outdoor kitchens, and
              entertainment areas. Our pool and garden planters will brighten
              any patio space.
            </p>
          </div>
          <div className="card">
            <h3>Smart Home Vision</h3>
            <p>
              Embrace the future with our smart home technology integration.
              From automated lighting to security systems, we make your home
              intelligent and efficient. Our home office products include state
              of art technology that integrates with Zoom, Google, and
              Microsoft.
            </p>
          </div>
          <div className="card">
            <h3>Home Services</h3>
            <p>
              Complete home improvement services including consultation,
              installation, and ongoing maintenance to keep your home looking
              and functioning at its best.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="section-header" style={{ marginTop: "4rem" }}>
          <h2>Our Team</h2>
          <p>
            Meet the professionals who make your home transformation dreams a
            reality
          </p>
        </div>

        <div className="team-grid">
          <div className="team-member">
            <h4>Operations</h4>
            <p>
              <strong>Steve Wuthrich</strong> - Vendor Relations Director
            </p>
            <p>
              <strong>Taylor Wuthrich</strong> - Director of Operations
            </p>
            <p>
              <strong>Carson Wuthrich</strong> - Installation Director
            </p>
            <p>
              <strong>Jaden Goodwin</strong> - Technology Director
            </p>
            <p style={{ marginTop: "1rem", color: "#c6a96b" }}>
              Leadership, vendor relations, operations management, installation,
              and technology services
            </p>
          </div>
          <div className="team-member">
            <h4>Sales</h4>
            <p>
              <strong>Spencer Wuthrich</strong> - Sales Director
            </p>
            <p>
              <strong>Sherry Wuthrich</strong> - Design
            </p>
            <p>
              <strong>Abby Wuthrich</strong> - Customer Support
            </p>
            <p>
              <strong>Aubri Wuthrich</strong> - Customer Engagement
            </p>
            <p>
              <strong>Hannah Goodwin</strong> - Design & Procurement
            </p>
            <p style={{ marginTop: "1rem", color: "#c6a96b" }}>
              Sales, customer relations, design, and procurement services
            </p>
          </div>
          <div className="team-member">
            <h4>Support</h4>
            <p>
              <strong>Kaylee Wuthrich</strong> - Billing & Support
            </p>
            <p>
              <strong>Krista Wuthrich</strong> - Customer Support
            </p>
            <p style={{ marginTop: "1rem", color: "#c6a96b" }}>
              Billing, customer support, and administrative services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
