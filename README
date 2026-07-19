# Portfolio Website

A personal portfolio website built with React to showcase profile information, technical skills, featured projects, and contact options.

## Live Website

[https://thanhportfolio.vercel.app/](https://thanhportfolio.vercel.app/)

## Overview

This project is a single-page portfolio application with section-based navigation:

- Home (hero intro + social links + resume download)
- Skills (grouped technical skills)
- Projects (project cards with code/demo links)
- Contact (email, phone, and contact form)

The navigation bar uses a scroll spy behavior to highlight the active section while scrolling.

## Tech Stack

- React 19
- React DOM 19
- React Scripts 5 (Create React App toolchain)
- EmailJS Browser SDK (@emailjs/browser)
- CSS (component-scoped styles)

## Project Structure

```
src/
	App.jsx
	index.js
	index.css
	components/
		Header/
		Navbar/
		Hero/
		Skills/
		Projects/
		Contact/
		Footer/
		Logo/
	data/
		skills.js
		projects.js
	asset/
		docs/
		icons/
		images/
public/
build/
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (recommended)

### Install Dependencies

```bash
npm install
```

### Run in Development

```bash
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000) by default.

### Build for Production

```bash
npm run build
```

Production output is generated in the `build/` folder.

### Run Tests

```bash
npm test
```

## Configuration and Customization

### Update Personal Content

- Hero section text and profile links: `src/components/Hero/Hero.jsx`
- Skills list: `src/data/skills.js`
- Projects list: `src/data/projects.js`
- Footer content: `src/components/Footer/Footer.jsx`

### Update Resume and Assets

- Resume file location: `src/asset/docs/resume.pdf`
- Icons and images: `src/asset/icons/` and `src/asset/images/`

### Contact Form (EmailJS)

The contact form sends messages using EmailJS in:

- `src/components/Contact/SendEmail.js`

Current EmailJS service/template/public key values are hardcoded. For better security and maintainability, move these values to environment variables.

Example idea:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

Then read them from `process.env` in `SendEmail.js`.

## Deployment

You can deploy this app to platforms like Netlify, Vercel, or GitHub Pages using the production build in `build/`.

## Project Review

### What is working well

- Clean component-based structure with separation of UI sections.
- Data-driven rendering for skills and projects (easy to extend).
- Scroll spy navigation improves single-page usability.
- Contact flow includes direct mailto/tel options plus a form.

## Author

Nguyen Hoang Thanh Phan
