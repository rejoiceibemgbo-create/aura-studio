import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate UI submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          
          {/* Left Column: Contact Info & Details */}
          <div className="contact-info-col">
            <span className="section-subtitle">Get in Touch</span>
            <h2 className="section-title contact-title">Let's Start a Conversation</h2>
            <p className="contact-lead">
              We're currently taking on new branding, UI/UX, and web design projects. Reach out to discuss your project or ask a question.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-card">
                <div className="detail-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="detail-label">Email Us</span>
                  <a href="mailto:hello@aurastudio.co" className="detail-value">
                    hello@aurastudio.co
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="detail-icon-box">
                  <Globe size={20} />
                </div>
                <div>
                  <span className="detail-label">Official Website</span>
                  <a href="http://www.aurastudio.co" target="_blank" rel="noopener noreferrer" className="detail-value">
                    www.aurastudio.co
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="detail-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">London, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: React Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrapper glass-panel">
              {isSubmitted ? (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="success-title">Thank you — we'll be in touch soon.</h3>
                  <p className="success-desc">
                    Your inquiry has been received. Maya Daniels or a member of the Aura Studio team will get back to you shortly.
                  </p>
                  <button onClick={resetForm} className="btn-secondary success-btn">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h3 className="form-title">Send Us a Message</h3>

                  {/* Name Input */}
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Daniels"
                      className="form-input"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. maya@example.com"
                      className="form-input"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                    <label htmlFor="message" className="form-label">
                      Project Details / Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand goals, timeline, or project scope..."
                      className="form-input form-textarea"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-primary form-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spinner" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
