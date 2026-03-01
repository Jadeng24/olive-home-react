import React, { useState, useEffect, useRef } from "react";
import "./Services.scss";

interface ServiceFormData {
  service_type: string;
  consult_name?: string;
  consult_phone?: string;
  consult_date?: string;
  window_name?: string;
  window_phone?: string;
  window_count?: string;
  zip_code?: string;
  tech_name?: string;
  tech_system?: string;
  tech_details?: string;
  _replyto: string;
}

const Services: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ServiceFormData>({
    service_type: "",
    _replyto: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
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
        const response = await fetch("/services.pdf", {
          method: "HEAD",
        });
        setPdfExists(response.ok);
      } catch {
        setPdfExists(false);
      }
    };

    checkPdfExists();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      service_type: value,
      _replyto: prev._replyto,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service_type) {
      alert("Please select a service type");
      return;
    }

    if (!formData._replyto) {
      alert("Please enter your email address");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mldlrkar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          form_name: "service-form",
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          service_type: "",
          _replyto: "",
        });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting your form. Please try again.");
    }
  };

  return (
    <div className="services page">
      <div className="services-hero" ref={heroRef}>
        <div className="container">
          <h1>OUR SERVICES</h1>
          <p>
            Professional Installation. Quality Products. Exceptional Service.
          </p>
        </div>
      </div>

      <div className="services-form-section">
        <div className="container">
          <div className="form-container">
            <h2>Request Services</h2>
            <p>
              Tell us what you'd like, and we'll follow up with details &
              pricing.
            </p>

            <form className="service-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="service-type">
                  What are you interested in?
                </label>
                <select
                  id="service-type"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleServiceTypeChange}
                  required
                >
                  <option value="">–– Select a service ––</option>
                  <option value="free_consult">Free Consultation</option>
                  <option value="window_quote">Window Treatment Quote</option>
                  <option value="home_tech">Home Technology</option>
                </select>
              </div>

              {/* Free Consultation fields */}
              {formData.service_type === "free_consult" && (
                <div className="service-fields">
                  <div className="form-group">
                    <label htmlFor="consult-name">Full Name</label>
                    <input
                      type="text"
                      id="consult-name"
                      name="consult_name"
                      value={formData.consult_name || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="consult-phone"
                      name="consult_phone"
                      value={formData.consult_phone || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-date">Preferred Date</label>
                    <input
                      type="date"
                      id="consult-date"
                      name="consult_date"
                      value={formData.consult_date || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {/* Window Treatment Quote fields */}
              {formData.service_type === "window_quote" && (
                <div className="service-fields">
                  <div className="form-group">
                    <label htmlFor="window-name">Full Name</label>
                    <input
                      type="text"
                      id="window-name"
                      name="window_name"
                      value={formData.window_name || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="window-phone">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="window-phone"
                      name="window_phone"
                      value={formData.window_phone || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="window-count">How many windows?</label>
                    <input
                      type="number"
                      id="window-count"
                      name="window_count"
                      placeholder="e.g. 3"
                      value={formData.window_count || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">What's your Zip Code?</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip_code"
                      placeholder="e.g. 84005"
                      value={formData.zip_code || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {/* Home Technology fields */}
              {formData.service_type === "home_tech" && (
                <div className="service-fields">
                  <div className="form-group">
                    <label htmlFor="tech-name">Full Name</label>
                    <input
                      type="text"
                      id="tech-name"
                      name="tech_name"
                      value={formData.tech_name || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tech-system">What system?</label>
                    <select
                      id="tech-system"
                      name="tech_system"
                      value={formData.tech_system || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">Select…</option>
                      <option value="home_office">Home Office</option>
                      <option value="home_theater">Home Theater</option>
                      <option value="smart_lighting">Smart Lighting</option>
                      <option value="security">Security System</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tech-details">
                      Any additional details?
                    </label>
                    <textarea
                      id="tech-details"
                      name="tech_details"
                      rows={3}
                      value={formData.tech_details || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="_replyto">Your Email</label>
                <input
                  type="email"
                  id="_replyto"
                  name="_replyto"
                  value={formData._replyto}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <button type="submit" className="btn">
                Submit
              </button>

              {showSuccess && (
                <div className="success-message">
                  Your form has been submitted successfully! We will contact you
                  shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {pdfExists && (
        <div className="container">
          <div className="catalog-section">
            <h2>Service Information</h2>
            <p>View detailed information about our services</p>
            <div className="pdf-container">
              <iframe
                src="/services.pdf#toolbar=0"
                title="Services Information"
                className="pdf-viewer"
              />
            </div>
            <div className="fallback-message">
              <p>
                Can't see the document?{" "}
                <a
                  href="/services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to download the PDF
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
