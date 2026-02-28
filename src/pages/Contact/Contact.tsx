import React, { useState, useEffect, useRef } from "react";
import "./Contact.scss";

interface SubscriptionFormData {
  name: string;
  email: string;
  interest: string;
}

interface PartnershipFormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [subscriptionForm, setSubscriptionForm] =
    useState<SubscriptionFormData>({
      name: "",
      email: "",
      interest: "home-decor",
    });

  const [partnershipForm, setPartnershipForm] = useState<PartnershipFormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const [showSubscriptionSuccess, setShowSubscriptionSuccess] = useState(false);
  const [showPartnershipSuccess, setShowPartnershipSuccess] = useState(false);
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
        const response = await fetch("/contact.pdf", {
          method: "HEAD",
        });
        setPdfExists(response.ok);
      } catch {
        setPdfExists(false);
      }
    };

    checkPdfExists();
  }, []);

  const handleSubscriptionInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setSubscriptionForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePartnershipInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPartnershipForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mldlrkar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...subscriptionForm,
          form_name: "subscription-form",
        }),
      });

      if (response.ok) {
        setShowSubscriptionSuccess(true);
        setSubscriptionForm({
          name: "",
          email: "",
          interest: "home-decor",
        });
        setTimeout(() => setShowSubscriptionSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting your form. Please try again.");
    }
  };

  const handlePartnershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mldlrkar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...partnershipForm,
          form_name: "partnership-form",
        }),
      });

      if (response.ok) {
        setShowPartnershipSuccess(true);
        setPartnershipForm({
          name: "",
          phone: "",
          email: "",
          company: "",
          message: "",
        });
        setTimeout(() => setShowPartnershipSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting your form. Please try again.");
    }
  };

  return (
    <div className="contact page">
      <div className="contact-hero" ref={heroRef}>
        <div className="container">
          <h1>CONTACT US</h1>
          <p>
            Get in touch with our team for personalized service and expert
            guidance.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="subscription-section">
          <div className="subscription-header">
            <h3>Subscribe to Deals & Special Offers</h3>
          </div>
          <form
            className="subscription-form"
            onSubmit={handleSubscriptionSubmit}
          >
            <div className="form-group">
              <label htmlFor="sub-name">Name</label>
              <input
                type="text"
                id="sub-name"
                name="name"
                value={subscriptionForm.name}
                onChange={handleSubscriptionInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sub-email">Email</label>
              <input
                type="email"
                id="sub-email"
                name="email"
                value={subscriptionForm.email}
                onChange={handleSubscriptionInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sub-interest">What are you interested in?</label>
              <select
                id="sub-interest"
                name="interest"
                value={subscriptionForm.interest}
                onChange={handleSubscriptionInputChange}
              >
                <option value="home-decor">Home Decor</option>
                <option value="outdoor-living">Outdoor Living</option>
                <option value="home-technology">Home Technology</option>
                <option value="home-services">Home Services</option>
                <option value="all">All Products & Services</option>
              </select>
            </div>
            <div className="form-submit">
              <button type="submit" className="btn">
                Subscribe
              </button>
            </div>
            {showSubscriptionSuccess && (
              <div className="success-message">
                Your message was sent successfully!
              </div>
            )}
          </form>
        </div>

        {/* Partner with Us Section */}
        <div className="partnership-section">
          <div className="section-header">
            <h2>Partner with Us</h2>
            <p>
              Join our network of quality suppliers and service providers. Let's
              grow together.
            </p>
          </div>

          <form className="partnership-form" onSubmit={handlePartnershipSubmit}>
            <div className="form-group">
              <label htmlFor="partner-name">Full Name *</label>
              <input
                type="text"
                id="partner-name"
                name="name"
                value={partnershipForm.name}
                onChange={handlePartnershipInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="partner-phone">Phone Number *</label>
              <input
                type="tel"
                id="partner-phone"
                name="phone"
                value={partnershipForm.phone}
                onChange={handlePartnershipInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="partner-email">Email Address *</label>
              <input
                type="email"
                id="partner-email"
                name="email"
                value={partnershipForm.email}
                onChange={handlePartnershipInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="partner-company">Company Name (Optional)</label>
              <input
                type="text"
                id="partner-company"
                name="company"
                value={partnershipForm.company}
                onChange={handlePartnershipInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="partner-message">
                Tell us about your business and how you'd like to partner with
                us
              </label>
              <textarea
                id="partner-message"
                name="message"
                value={partnershipForm.message}
                onChange={handlePartnershipInputChange}
                rows={4}
                placeholder="Describe your products/services and partnership interest..."
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn">
                Submit Partnership Inquiry
              </button>
            </div>
            {showPartnershipSuccess && (
              <div className="success-message">
                Your partnership inquiry was sent successfully!
              </div>
            )}
          </form>
        </div>

        {pdfExists && (
          <div className="catalog-section">
            <h2>Additional Information</h2>
            <p>View more details about contacting us</p>
            <div className="pdf-container">
              <iframe
                src="/contact.pdf"
                title="Contact Information"
                className="pdf-viewer"
              />
            </div>
            <div className="fallback-message">
              <p>
                Can't see the document?{" "}
                <a
                  href="/contact.pdf"
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
  );
};

export default Contact;
