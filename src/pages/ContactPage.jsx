import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { contactCards, profile } from '../data/portfolioData';

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formspreeEndpoint) {
      setIsSubmitting(true);
      setStatus({ type: 'pending', message: 'Sending...' });

      try {
        const payload = new FormData();
        payload.append('name', form.name);
        payload.append('email', form.email);
        payload.append('subject', form.subject);
        payload.append('message', form.message);

        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          body: payload,
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        setForm({ name: '', email: '', subject: '', message: '' });
        setStatus({ type: 'success', message: "Message sent successfully. I'll reply soon." });
      } catch (error) {
        setStatus({
          type: 'error',
          message: 'Something went wrong while sending the message. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    const subject = encodeURIComponent(form.subject || `Opportunity for ${profile.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: 'success',
      message: 'No mail service is configured yet, so this opened your default email client.',
    });
  };

  return (
    <div className="section-wrap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about building modern, scalable systems."
          description="Whether the opportunity is backend engineering, enterprise applications, or platform work, I’m open to conversations about high-impact roles in Dubai and remote-first teams."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                className="surface-card block p-6 transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-strong)]">
                  {card.title}
                </p>
                <p className="mt-3 text-lg font-medium text-[var(--text)]">{card.value}</p>
              </a>
            ))}

            <div className="cta-panel p-6">
              <h3 className="text-xl font-semibold text-[var(--text)]">Open to relocation</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Currently open to relocation to Dubai, UAE for roles focused on backend systems,
                microservices, enterprise applications, and modern software delivery.
              </p>
            </div>
          </div>

          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-[var(--text)]">Send a message</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {formspreeEndpoint
                ? 'Messages are sent directly from this form.'
                : 'This opens your default email client until a form endpoint is configured.'}
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <button type="submit" className="primary-btn" disabled={isSubmitting}>
                {isSubmitting
                  ? 'Sending...'
                  : formspreeEndpoint
                    ? 'Send Message'
                    : 'Open email draft'}
              </button>
              <p
                className={`text-sm ${
                  status.type === 'error'
                    ? 'text-red-500'
                    : status.type === 'success'
                      ? 'text-emerald-500'
                      : 'text-[var(--muted)]'
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
