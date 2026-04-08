# Personal Trainer Website – Requirements Specification

## 1. Document Purpose

This document defines the complete functional, non-functional, and technical requirements for a personal trainer website.  
It is intended to be used by an AI system or software team to design and implement the website without additional clarification.

The website is a **simple lead‑generation marketing site** for a **single personal trainer** offering **in‑person training services**.

---

## 2. Business Objective

The primary objective of the website is to **generate booking inquiries and contact leads**.

The website must:
- Clearly explain who the trainer is
- Clearly explain who the services are for
- Clearly explain what services are offered
- Clearly show pricing
- Make booking or contacting the trainer easy and prominent

Secondary objectives include establishing trust, credibility, and approachability.

---

## 3. Target Audience

The website targets:
- Fitness beginners
- Women
- Individuals interested in general fitness and healthy lifestyle improvement

All messaging must:
- Be friendly and motivational
- Avoid intimidating or overly technical language
- Emphasize support, encouragement, and safety

---

## 4. Service Scope

- Services are **in‑person only**
- Training location is **BCIT Recreational Center, Burnaby, BC**
- No online training services are offered
- No payment is collected through the website

---

## 5. Site Structure

The website must consist of **4 pages** to maintain simplicity.

### Required Pages
1. Home
2. About (including testimonials)
3. Services & Pricing
4. Booking & Contact

Navigation must be:
- Visible on all pages
- Simple and consistent
- Optimized for mobile and desktop use

---

## 6. Page Requirements

### 6.1 Home Page

The Home page is the primary landing page and must immediately communicate value.

The Home page must include:
- A friendly, motivational headline
- A short introduction explaining the trainer’s approach
- The training location (BCIT Recreational Center, Burnaby)
- Clear calls to action leading to booking or contact
- Brief references to services and outcomes (no detailed pricing)

The Home page must prioritize clarity and conversion over dense content.

---

### 6.2 About Page (Including Testimonials)

The About page exists to build trust and credibility.

It must include:
- Trainer biography
- Qualifications and experience
- Training philosophy focused on beginners and general fitness
- Emphasis on encouragement, safety, and personalization

Testimonials must:
- Be included on this page
- Reinforce positive outcomes and experiences
- Be sourced from external data files
- Be rendered dynamically

---

### 6.3 Services & Pricing Page

The Services & Pricing page must provide complete service clarity.

It must include:
- Description of in‑person personal training services
- Explanation of how sessions typically work
- Clear expectations for beginners
- Transparent pricing for sessions and/or packages

All pricing information must:
- Be visible to users
- Be easy to understand
- Be sourced from data files (not hardcoded)

---

### 6.4 Booking & Contact Page

The Booking & Contact page is the primary conversion page.

It must include:
- An embedded booking system using Setmore.com or a similar service
- Booking must be accessible directly within the page
- No payment handling is required

The page must also include a contact form.

The contact form must:
- Collect name, email, and message
- Perform basic client-side validation
- Show a successful submission confirmation

---


# 7. Functional Requirements

The website must support:
- Embedded third‑party scheduling
- Contact form submission for lead generation
- Dynamic rendering of all content from external data
- Reusable layout and UI components

The website must not include:
- User accounts
- Authentication
- Payments
- Admin dashboards

---

## 8. Content and Data Requirements

All content must be separated from UI logic.

Requirements:
- Text, services, pricing, and testimonials stored in external data files (e.g., JSON)
- React components must consume content via imports or a data layer
- No static text or prices hardcoded in JSX

This separation is mandatory.

---

## 8.1 Required Data File Structures

### services.json
```json
{
  "services": [
    {
      "id": "string",
      "name": "string", 
      "description": "string",
      "duration": "string",
      "price": "number"
    }
  ]
}
```

### testimonials.json  
```json
{
  "testimonials": [
    {
      "id": "string",
      "name": "string",
      "text": "string",
      "rating": "number"
    }
  ]
}
```

### trainer.json
```json
{
  "name": "string",
  "bio": "string",
  "qualifications": ["string"],
  "philosophy": "string"
}
```

---

## 9. Technical Requirements

### 9.1 Technology Stack

- Frontend: React.js
- Runtime / server environment: Node.js
- Data storage: Local structured data files (JSON or equivalent)

No database is required.

---

### 9.2 Application Architecture

The application must:
- Follow a component-based architecture
- Use reusable layout components (header, footer, layout)
- Separate data, presentation, and routing concerns
- Support future extension without major refactoring

---

### 9.3 Required Component Structure

- `components/Layout/Header.jsx`
- `components/Layout/Footer.jsx` 
- `components/Home/Hero.jsx`
- `components/About/Bio.jsx`
- `components/About/Testimonials.jsx`
- `components/Services/ServiceList.jsx`
- `components/Booking/BookingEmbed.jsx`
- `components/Contact/ContactForm.jsx`

---

## 10. Non-Functional Requirements

### 10.1 Usability and Accessibility

- Responsive design (mobile-first)
- Readable typography and contrast
- Keyboard-accessible navigation
- Simple, intuitive interactions

---

### 10.2 Performance

- Fast initial load
- Optimized images and assets
- Minimal unnecessary JavaScript
- Lazy loading where appropriate

---

### 10.3 SEO

- Semantic HTML structure
- Page-level meta titles and descriptions
- Support for social sharing metadata

---

### 10.4 Analytics

- Architecture must allow integration of analytics tools
- Analytics configuration is not required initially

---

## 11. Constraints and Assumptions

- Single trainer only
- In-person services only
- English language only
- Marketing site, not an application

---

## 12. Out of Scope

The following are explicitly excluded:
- Online training programs
- Payment processing
- Blogs or content systems
- User authentication
- Admin or CMS functionality

---

## 13. Future Considerations

The structure should allow future expansion (e.g., online services or payments) without requiring a complete rebuild, though these features are not part of the current scope.

---

## 14. Deployment Requirements

- Static site hosting: Vercel
- Build process: `npm run build`
- Environment variables for booking system integration
- Automatic deployment on git push to main branch
- Custom domain configuration support
