import { useState } from 'react';

/**
 * Contact Form — Wired to Web3Forms (https://api.web3forms.com/submit)
 *
 * CRITICAL: Access key is a clearly-labeled placeholder.
 * Replace with your real public key before launch.
 *
 * Uses fetch + preventDefault (no raw form post).
 * Success and error states displayed.
 * All 7 services in the dropdown, matching the Services section exactly.
 */

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_PUBLIC_KEY_HERE"; // TODO: replace before launch

const serviceOptions = [
  'Cuts & Styling',
  'Coloring',
  'Treatments',
  'Extensions',
  'Manicures & Pedicures',
  'Skin & Spa Treatments',
  'Makeup & Bridal',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setResponseMsg('Please fill out your name, email, and message.');
      return;
    }

    setStatus('loading');
    setResponseMsg('');

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message,
        // Helpful metadata
        subject: `New inquiry from ${formData.name} — Kieu's Salon website`,
        from_name: "Kieu's Salon Website",
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setResponseMsg('Thank you. Your message has been sent. We will contact you shortly.');
        resetForm();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      setStatus('error');
      setResponseMsg('Something went wrong. Please try again or call us directly at (781) 986-0112.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-2xl">
        <div className="reveal text-center mb-10">
          <div className="eyebrow">Let’s Connect</div>
          <h2 className="serif mt-3">Book an Appointment</h2>
          <p className="mt-3 text-[var(--text-muted)] max-w-md mx-auto">
            Tell us a little about what you’re looking for. We’ll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 reveal" noValidate>
          {/* Honeypot (spam protection for Web3Forms) */}
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="form-label">Phone <span className="normal-case text-[10px]">(optional)</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="(781) 555-1234"
              />
            </div>
            <div>
              <label htmlFor="service" className="form-label">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select a service…</option>
                {serviceOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="form-input resize-y min-h-[120px]"
              placeholder="Tell us about the look you have in mind, preferred date/time, or any special requests..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-gold w-full md:w-auto px-10 py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'SENDING…' : 'SEND MESSAGE'}
          </button>

          {/* Feedback states */}
          {status === 'success' && (
            <div className="form-message form-success">
              {responseMsg}
            </div>
          )}
          {status === 'error' && (
            <div className="form-message form-error">
              {responseMsg}
            </div>
          )}

          <p className="text-[11px] text-[var(--text-muted)] pt-1">
            Your information is private. We respond personally.
          </p>
        </form>

        {/* Note for developer */}
        <div className="mt-8 text-[10px] text-[var(--text-muted)]/60 border-l-2 border-[var(--border)] pl-3">
          Web3Forms access key placeholder is at the top of Contact.jsx. Replace before going live.
        </div>
      </div>
    </section>
  );
};

export default Contact;
