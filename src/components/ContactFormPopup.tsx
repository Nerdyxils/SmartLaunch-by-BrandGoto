import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    packages: [] as string[],
    honeypot: '' // Hidden field to catch bots
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const availablePackages = [
    'Starter Launch ($2,500)',
    'Pro Launch ($4,000)',
    'Ultimate SmartLaunch ($7,500)',
    'Custom Package ($10K+)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePackageChange = (packageName: string) => {
    setFormData(prev => ({
      ...prev,
      packages: prev.packages.includes(packageName)
        ? prev.packages.filter(pkg => pkg !== packageName)
        : [...prev.packages, packageName]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || formData.packages.length === 0) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields and select at least one package.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your Make.com webhook URL
      const response = await fetch('https://hook.us2.make.com/wrs6b6tz4k1yisrq73f628c11e1gml7h', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          packages: formData.packages,
          source: 'SmartLaunch Website',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          packages: [],
          honeypot: ''
        });
        
        // Auto close after 3 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          {/* Close Button */}
          <button className="popup-close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          {/* Header */}
          <div className="popup-header">
            <h2 className="popup-title">
              Get Your <span className="gradient-text">Launch Started</span>
            </h2>
            <p className="popup-subtitle">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="popup-success">
              <CheckCircle size={48} className="success-icon" />
              <h3 className="success-title">Thank You!</h3>
              <p className="success-message">
                We've received your request and will contact you within 24 hours.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="popup-error">
              <AlertCircle size={24} className="error-icon" />
              <p className="error-message">{errorMessage}</p>
            </div>
          )}

          {/* Form */}
          {submitStatus !== 'success' && (
            <form onSubmit={handleSubmit} className="popup-form">
              {/* Honeypot Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                className="honeypot-field"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Company Field */}
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              {/* Packages Field */}
              <div className="form-group">
                <label className="form-label">
                  Interested Packages <span className="required">*</span>
                </label>
                <div className="packages-grid">
                  {availablePackages.map((packageName) => (
                    <label key={packageName} className="package-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.packages.includes(packageName)}
                        onChange={() => handlePackageChange(packageName)}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom"></span>
                      <span className="package-name">{packageName}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="popup-submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactFormPopup; 