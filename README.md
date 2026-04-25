# Jafar Madadi Portfolio

Personal portfolio source code for Jafar Madadi, a Senior Software Engineer focused on backend architecture, microservices, enterprise systems, and scalable application delivery.

## Stack

- React
- Vite
- Tailwind CSS
- React Router

## Sections

- Home
- About
- Experience
- Contact

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Contact Form Setup

This project supports the same message flow used in the sibling `PortFolio` project: a `fetch()` POST to Formspree.

1. Create a form at [Formspree](https://formspree.io/).
2. Copy `.env.example` to `.env`.
3. Set:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

If `VITE_FORMSPREE_ENDPOINT` is not set, the contact form falls back to opening the user's default email client with a prefilled draft.
