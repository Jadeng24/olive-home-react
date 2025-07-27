import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
  return (
    <div className="home page">
      <div className="hero" ref={heroRef}>
        <div className="container">
          <h1 className="hero-title">OLIVE HOME CO</h1>
          <p className="hero-subtitle">
            Beautifully Designed. Expertly Installed. Thoughtfully Yours.
          </p>
          <Link to="/services" className="btn hero-btn">
            Learn More
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="services-grid">
          <div className="card">
            <h3>Home Decor</h3>
            <p>
              Transform your interior spaces with our curated selection of
              furniture, lighting, and decorative elements that reflect your
              personal style.
            </p>
          </div>
          <div className="card">
            <h3>Outdoor Living</h3>
            <p>
              Create stunning outdoor spaces with custom patios, landscaping,
              and outdoor furniture that extends your living area into nature.
            </p>
          </div>
        </div>

        <div className="services-grid">
          <div className="card">
            <h3>Home Technology</h3>
            <p>
              Integrate smart home/office systems, video conferencing,
              entertainment centers, and cutting-edge technology for modern,
              connected living.
            </p>
          </div>
          <div className="card">
            <h3>Window Treatments</h3>
            <p>
              Custom window treatments for every budget including shutters,
              shades, blinds, and drapery. Contact us today for a free estimate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
