import React, { useState } from "react";
import "./ContactUsProfessional.css"; // Import custom CSS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
      isValid = false;
    }
    if (!formData.message) {
      errors.message = "Message is required.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Message Sent Successfully!");
    }
  };

  return (
    <div className="contact-us-container ">
      <header className="contact-us-header">
        <div className="header-content">
          <h1 className="header-title">Mental Health Chatbot</h1>
          <p className="header-subtitle">Reach out to us for support</p>
        </div>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Mental Health Support"
          className="header-image"
        />
      </header>

      <section className="contact-form-section">
        <div className="form-container">
          <h2 className="form-title">We'd Love to Hear From You</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Name Field */}
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Message Field */}
            <div className="form-field">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="form-input"
              ></textarea>
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Mental Health Chatbot. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;