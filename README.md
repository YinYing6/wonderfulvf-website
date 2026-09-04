# Wonderful V&F Sdn. Bhd. Website
Front-End Web Development Project
[👉 Visit Wonderful V&F Website](https://wonderfulvf.com/)

A fully responsive, multilingual front-end website built for Wonderful V&F Sdn. Bhd., a Malaysian fresh produce distribution company. The site showcases their product catalog, company history, and business information to customers and B2B partners across three languages.

This project demonstrates practical skills in modern front-end development, including component-based architecture, multilingual content management, dynamic UI animations, and real-world client requirements.

## ✨ Project Summary

* **Type:** Front-End Web Development Project (Client Work)
* **Role:** Front-End Developer
* **Focus Areas:** UI/UX Design · Multilingual Support · Responsive Layout · Component Architecture
* **Client:** Wonderful V&F Sdn. Bhd. — Fresh produce wholesaler & distributor, Malaysia

The website acts as a digital storefront for a real fresh produce business, presenting their product range (corn, roots & tubers, fruits, vegetables) and company story to help customers place bulk/wholesale orders via WhatsApp and email.

## 🛠 Tech Stack

* **React 19** with **TypeScript**
* **Vite** – build tool and dev server
* **Tailwind CSS** (CDN, with custom brand theme config)
* **Framer Motion** – animations and transitions
* **Lucide React** – icon set
* **React Router DOM** – client-side routing across pages
* **React Context API** – shared app state (e.g. language selection)
* **Google Fonts** – Inter (sans) & Merriweather (serif)

## 🚀 Key Features

### 🔹 Multilingual Support
* Full English / Bahasa Malaysia / Chinese (中文) translations
* Language-aware product names, descriptions, FAQs, and company timeline
* Centralized translation helper pattern (`t()`) for maintainable copy

### 🔹 Product Catalog
* Categorized product listings: Corn Series, Roots & Tubers, Fruits, Vegetables & Others
* Each product includes name, description, packaging info, and image
* Structured, typed data model for easy content updates

### 🔹 Company Story
* Interactive timeline showcasing company milestones (founding in 2001 through incorporation in 2019)
* Highlights growth in supplier network, delivery fleet, and distribution reach

### 🔹 UI/UX Details
* Clean card-based layouts with a green/yellow brand palette
* Custom Tailwind theme (brand colors, font families)
* Image right-click/drag protection for content safety
* Responsive design across devices

### 🔹 Customer Support
* FAQ accordion covering ordering process, cancellation policy, returns, and custom product requests
* Direct WhatsApp and email contact integration for order inquiries

## 🗂 Project Structure

```
├── index.html
├── index.tsx          # App entry point
├── App.tsx            # Root component & routing setup
├── Layout.tsx          # Shared page layout (nav, footer, etc.)
├── data.tsx           # Product, FAQ, and timeline data (typed, multilingual)
├── types.ts           # Shared TypeScript types
├── components/        # Reusable UI components
├── pages/             # Route-level page components
├── contexts/          # React Context providers (e.g. language context)
├── utils/             # Helper functions
├── public/            # Static assets
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 💡 Problems Solved

* Gave a small family-run distribution business a professional, modern web presence
* Made product information accessible to non-English-speaking customers (BM & Chinese support)
* Streamlined the inquiry-to-order process by linking directly to WhatsApp/email
* Presented company credibility and history to build trust with B2B buyers

## 📈 Future Improvements

* 🛒 Online quotation/order form with automatic calculation
* 📦 Real-time stock availability indicators
* 🔍 Product search and filter by category
* 🔐 Admin dashboard for the client to update products without code changes

## ⭐ Why This Project Matters

This project showcases:

* Real-world client project experience beyond academic assignments
* Practical multilingual front-end architecture
* Clean, typed data-driven UI design with React + TypeScript
* Ability to translate a real business's needs into a functioning website
