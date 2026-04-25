import { useEffect, useState } from 'react';
import { ValidationError, useForm } from '@formspree/react';
import SectionHeading from '../components/SectionHeading';
import { contactCards } from '../data/portfolioData';

const initialForm = { name: '', email: '', subject: '', message: '' };

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState('');
  const [state, handleSubmit] = useForm('xbdqwvwy');

  useEffect(() => {
    if (!state.succeeded) {
      return;
    }

    setForm(initialForm);
    setSuccessMessage("Message sent successfully. I'll reply soon.");
  }, [state.succeeded]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (successMessage) {
      setSuccessMessage('');
    }
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
              Messages are sent directly from this form.
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
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-500"
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
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-500"
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
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-500"
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
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-500"
                />
              </div>
              <button type="submit" className="primary-btn" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
              <p
                className={`text-sm ${
                  state.errors?.length
                    ? 'text-red-500'
                    : successMessage
                      ? 'text-emerald-500'
                      : 'text-[var(--muted)]'
                }`}
                role="status"
                aria-live="polite"
              >
                {state.errors?.length
                  ? 'Something went wrong while sending the message. Please review the highlighted fields and try again.'
                  : successMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
