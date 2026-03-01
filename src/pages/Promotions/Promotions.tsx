import React, { useEffect, useState } from "react";
import "./Promotions.scss";

const Promotions: React.FC = () => {
  const [pdfExists, setPdfExists] = useState(false);

  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch("/promo.pdf", {
          method: "HEAD",
        });
        const contentType = response.headers.get("content-type");
        setPdfExists(response.ok && (contentType?.includes("pdf") || false));
      } catch {
        setPdfExists(false);
      }
    };

    checkPdfExists();
  }, []);

  return (
    <div className="promotions page">
      <div className="promotions-hero">
        <div className="hero-content">
          <h1>Current Promotions</h1>
          <p className="hero-subtitle">
            Check out our latest deals and special offers
          </p>
        </div>
      </div>

      <div className="container">
        {pdfExists ? (
          <>
            <div className="pdf-container">
              <iframe
                src="/promo.pdf#toolbar=0"
                title="Current Promotions"
                className="pdf-viewer"
              />
            </div>
            <div className="fallback-message">
              <p>
                Can't see the promotion?{" "}
                <a href="/promo.pdf" target="_blank" rel="noopener noreferrer">
                  Click here to download the PDF
                </a>
              </p>
            </div>
          </>
        ) : (
          <div className="no-promotions">
            <h2>No Active Promotions</h2>
            <p>Check back soon for our latest deals and special offers!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promotions;
