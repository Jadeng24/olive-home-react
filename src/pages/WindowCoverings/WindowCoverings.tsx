import React, { useEffect, useRef } from 'react';
import './WindowCoverings.scss';

const WindowCoverings: React.FC = () => {
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
    <div className="window-coverings page">
      <div className="window-coverings-hero" ref={heroRef}>
        <div className="container">
          <h1>WINDOW COVERINGS</h1>
          <p>Custom Window Treatments for Every Budget & Style</p>
        </div>
      </div>

      <div className="window-coverings-content">
        <div className="container">
          <div className="intro-section">
            <h2>Transform Your Windows</h2>
            <p>
              From elegant shutters to modern motorized blinds, we offer a complete range of window treatments that combine style, functionality, and energy efficiency. Our expert team provides professional consultation, precise measurement, and flawless installation.
            </p>
          </div>

          <div className="products-grid">
            <div className="product-category">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Plantation Shutters" />
              </div>
              <div className="product-info">
                <h3>Plantation Shutters</h3>
                <p>
                  Premium hardwood and composite shutters that add timeless elegance and exceptional light control. Available in various colors and finishes to complement any decor style.
                </p>
              </div>
            </div>

            <div className="product-category">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Custom Blinds" />
              </div>
              <div className="product-info">
                <h3>Custom Blinds</h3>
                <p>
                  Wood, faux wood, aluminum, and vertical blinds in countless colors and textures. Perfect for precise light control and privacy while maintaining a clean, modern aesthetic.
                </p>
              </div>
            </div>

            <div className="product-category">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Elegant Shades" />
              </div>
              <div className="product-info">
                <h3>Elegant Shades</h3>
                <p>
                  Roller, cellular, Roman, and motorized shades that offer superior insulation and UV protection. Choose from light-filtering to blackout options for any room's needs.
                </p>
              </div>
            </div>

            <div className="product-category">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Designer Drapery" />
              </div>
              <div className="product-info">
                <h3>Designer Drapery</h3>
                <p>
                  Custom curtains and drapes crafted from premium fabrics. Complete with professional hardware installation for a luxurious, finished look that frames your windows beautifully.
                </p>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h2>Why Choose Olive Home Co.?</h2>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-ruler-combined"></i>
                <h4>Custom Measurements</h4>
                <p>Professional measuring ensures perfect fit for every window</p>
              </div>
              <div className="feature">
                <i className="fas fa-palette"></i>
                <h4>Design Consultation</h4>
                <p>Expert guidance to match your style and functional needs</p>
              </div>
              <div className="feature">
                <i className="fas fa-tools"></i>
                <h4>Professional Installation</h4>
                <p>Certified installers ensure flawless results every time</p>
              </div>
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <h4>Quality Guarantee</h4>
                <p>Backed by manufacturer warranties and our satisfaction promise</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Transform Your Windows?</h2>
            <p>Schedule your free in-home consultation today</p>
            <div className="cta-buttons">
              <a href="/services" className="btn btn-primary">Request Quote</a>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowCoverings;
