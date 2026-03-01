import React, { useEffect, useRef, useState } from "react";
import "./WindowCoverings.scss";
import blindsImage from "../../assets/blinds.png";
import shadesImage from "../../assets/shades.png";
import draperyImage from "../../assets/drapery.png";
import shuttersImage from "../../assets/shutters.png";

const WindowCoverings: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [pdfExists, setPdfExists] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch("/window-coverings.pdf", {
          method: "HEAD",
        });
        setPdfExists(response.ok);
      } catch {
        setPdfExists(false);
      }
    };

    checkPdfExists();
  }, []);

  return (
    <div className="window-coverings page">
      <div className="window-coverings-hero" ref={heroRef}>
        <div className="container">
          <h1>WINDOW COVERINGS</h1>
          <p>Custom Window Coverings for Every Budget & Style</p>
        </div>
      </div>

      <div className="window-coverings-content">
        <div className="container">
          <div className="intro-section">
            <h2>Transform Your Windows</h2>
            <p>
              From elegant shutters to modern motorized blinds, we offer a
              complete range of window coverings that combine style,
              functionality, and energy efficiency. Our expert team provides
              professional consultation, precise measurement, and flawless
              installation.
            </p>
          </div>

          <div className="products-grid">
            <div className="product-category">
              <div className="product-image">
                <img src={shuttersImage} alt="Plantation Shutters" />
              </div>
              <div className="product-info">
                <h3>Plantation Shutters</h3>
                <p>
                  Premium hardwood and composite shutters that add timeless
                  elegance and exceptional light control. Available in various
                  colors and finishes to complement any decor style.
                </p>
              </div>
            </div>

            <div className="product-category">
              <div className="product-image">
                <img src={blindsImage} alt="Custom Blinds" />
              </div>
              <div className="product-info">
                <h3>Custom Blinds</h3>
                <p>
                  Wood, faux wood, aluminum, and vertical blinds in countless
                  colors and textures. Perfect for precise light control and
                  privacy while maintaining a clean, modern aesthetic.
                </p>
              </div>
            </div>

            <div className="product-category">
              <div className="product-image">
                <img src={shadesImage} alt="Elegant Shades" />
              </div>
              <div className="product-info">
                <h3>Elegant Shades</h3>
                <p>
                  Roller, cellular, Roman, and motorized shades that offer
                  superior insulation and UV protection. Choose from
                  light-filtering to blackout options for any room's needs.
                </p>
              </div>
            </div>

            <div className="product-category">
              <div className="product-image">
                <img src={draperyImage} alt="Designer Drapery" />
              </div>
              <div className="product-info">
                <h3>Designer Drapery</h3>
                <p>
                  Custom curtains and drapes crafted from premium fabrics.
                  Complete with professional hardware installation for a
                  luxurious, finished look that frames your windows beautifully.
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
                <p>
                  Professional measuring ensures perfect fit for every window
                </p>
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
                <p>
                  Backed by manufacturer warranties and our satisfaction promise
                </p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Transform Your Windows?</h2>
            <p>Schedule your free in-home consultation today</p>
            <div className="cta-buttons">
              <a href="/services" className="btn btn-primary">
                Request Quote
              </a>
              <a href="/contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>

          {pdfExists && (
            <div className="catalog-section">
              <h2>Browse Our Catalog</h2>
              <p>
                View our complete selection of window covering options, styles,
                and colors
              </p>
              <div className="pdf-container">
                <iframe
                  src="/window-coverings.pdf#toolbar=0"
                  title="Window Coverings Catalog"
                  className="pdf-viewer"
                />
              </div>
              <div className="fallback-message">
                <p>
                  Can't see the catalog?{" "}
                  <a
                    href="/window-coverings.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to download the PDF
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WindowCoverings;
