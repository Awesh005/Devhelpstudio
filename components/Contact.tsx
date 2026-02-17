
import React, { useState, useRef } from 'react';
import { Mail, Send, CheckCircle, MessageCircle, Clock, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ══════════════════════════════════════════════════════════════════════
// 📧 EmailJS Configuration
// ──────────────────────────────────────────────────────────────────────
// To set up EmailJS (free — 200 emails/month):
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (Gmail) → Get your SERVICE_ID
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{phone}}, {{domain}}, {{message}}
//    Set "To Email" to: devhelpstudio.team@gmail.com
//    → Get your TEMPLATE_ID
// 4. Copy your PUBLIC_KEY from Account → API Keys
// 5. Replace the values below:
// ══════════════════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = 'service_7q1clq2';    // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_ju232mj';  // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'g89NRoG5fDJ4immDC';     // Replace with your Public Key

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phone: '',
    domain: 'Website Development',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Phone: allow only digits
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: digitsOnly });
    } 
    // Name: allow only letters and spaces
    else if (name === 'from_name') {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, from_name: lettersOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Name validation
    const trimmedName = formData.from_name.trim();
    if (!trimmedName) {
      errors.from_name = 'Name is required';
    } else if (trimmedName.length < 2) {
      errors.from_name = 'Name must be at least 2 characters';
    } else if (trimmedName.length > 50) {
      errors.from_name = 'Name must be under 50 characters';
    }

    // Email validation
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = 'Enter a valid email address';
    }

    // Phone validation
    const trimmedPhone = formData.phone.trim();
    if (!trimmedPhone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(trimmedPhone)) {
      errors.phone = 'Enter a valid 10-digit phone number';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name.trim(),
          email: formData.email.trim(),
          phone: `+91 ${formData.phone}`,
          domain: formData.domain,
          message: formData.message.trim() || 'No additional message provided.',
          to_email: 'devhelpstudio.team@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ from_name: '', email: '', phone: '', domain: 'Website Development', message: '' });
      setFieldErrors({});
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send your inquiry. Please try again or contact us via WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Left panel */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-gray-50 to-white">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Ready to Ace <br />Your Project?
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Don't wait until the last week! Our slots fill up fast. Reach out now for a quick consultation.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Email us</h4>
                  <span className="text-blue-600 text-sm">
                    devhelpstudio.team@gmail.com
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919304203985?text=Hi%2C%20I%20need%20help%20with%20my%20final%20year%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">WhatsApp</h4>
                  <span className="text-green-600 text-sm font-medium">Chat with us instantly →</span>
                </div>
              </a>

              {/* Response time */}
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>Typically replies within 2 hours</span>
              </div>
              
              {/* Limited slots */}
              <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
                <p className="text-blue-700 font-semibold mb-1 flex items-center gap-2 text-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  Limited Slots Available
                </p>
                <p className="text-blue-600 text-xs">
                  Currently accepting Summer/Final Semester projects. First come, first serve!
                </p>
              </div>
            </div>
          </div>

          {/* Right panel — Form */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        fieldErrors.from_name 
                          ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-50' 
                          : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50'
                      }`}
                      placeholder="Enter your full name" 
                    />
                    {fieldErrors.from_name && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{fieldErrors.from_name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
                        fieldErrors.email 
                          ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-50' 
                          : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50'
                      }`}
                      placeholder="Your email address" 
                    />
                    {fieldErrors.email && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Phone <span className="text-red-500">*</span></label>
                    <div className="flex">
                      <span className={`inline-flex items-center px-3 py-3 text-sm font-medium rounded-l-xl border border-r-0 ${
                        fieldErrors.phone 
                          ? 'text-red-400 bg-red-50 border-red-400' 
                          : 'text-gray-500 bg-gray-50 border-gray-200'
                      }`}>
                        +91
                      </span>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        inputMode="numeric"
                        className={`w-full px-4 py-3 rounded-r-xl border outline-none transition-all text-sm ${
                          fieldErrors.phone 
                            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-50' 
                            : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50'
                        }`}
                        placeholder="10-digit mobile number" 
                      />
                    </div>
                    {fieldErrors.phone && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{fieldErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Target Domain <span className="text-red-500">*</span></label>
                    <select 
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm bg-white"
                    >
                      <option>Website Development</option>
                      <option>AI / Machine Learning</option>
                      <option>Automation / Chatbots</option>
                      <option>Management Systems</option>
                      <option>Detection / Security</option>
                      <option>Mobile App Development</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Message (Optional)</label>
                  <textarea 
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm resize-none" 
                    placeholder="Any specific requirements?"
                  ></textarea>
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-gray-400 text-xs">
                  No spam. We'll only contact you about your project.
                </p>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-scale-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Inquiry Sent! ✉️</h3>
                <p className="text-gray-500 text-lg mb-2 max-w-sm">
                  Your message has been delivered directly to our inbox.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  We'll get back to you within 24 hours. Check your email/phone!
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setError(null); }}
                  className="text-blue-600 font-bold hover:underline transition-colors"
                >
                  ← Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
