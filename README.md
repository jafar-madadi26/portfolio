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

This project uses the Formspree React integration for the contact form.

1. Create a form at [Formspree](https://formspree.io/).
2. Copy `.env.example` to `.env`.
3. Set the values:

```bash
VITE_APP_BASE_PATH=/jafar-dev-portfolio/
VITE_FORMSPREE_FORM_ID=xbdqwvwy
```

`VITE_APP_BASE_PATH` should match your GitHub repository name when deploying to GitHub Pages.

`VITE_FORMSPREE_FORM_ID` is the Formspree form ID, not the full endpoint URL.

## GitHub Pages

This app is configured for deployment to:

`https://jafar-madadi26.github.io/jafar-dev-portfolio/`

The project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the site whenever changes are pushed to `main`.

In your GitHub repository settings, set Pages -> Build and deployment -> Source to `GitHub Actions`.
