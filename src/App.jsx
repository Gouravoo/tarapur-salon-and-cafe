import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import Landing from './Landing'
import SalonApp from './SalonApp'
import CafeApp from './cafe/CafeApp'
import './styles/globals.css'
import './App.css'

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* Page transition wrapper */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

/* ─── SEO: Landing page ───────────────────────────── */
function LandingHelmet() {
  return (
    <Helmet>
      <title>Cafe 007 &amp; 9XM Salon | Best Restaurant, Cafe &amp; Salon in Tarapur Munger Bihar – Singh Works</title>
      <meta name="description" content="Cafe 007 — Tarapur's best fully AC restaurant & cafe. Pizza, burger, momos, dosa, cold coffee & more. 9XM Salon — best men's grooming salon. Serving Tarapur, Asarganj, Sangrampur, Munger. Opp. Food Plaza, Deoghar Rd, Tarapur 813221." />
      <link rel="canonical" href="https://singhworks.in/" />
      <meta property="og:title" content="Cafe 007 & 9XM Salon | Best Restaurant & Salon in Tarapur, Munger Bihar" />
      <meta property="og:description" content="Cafe 007 — Tarapur's best AC restaurant & cafe. 9XM Salon — premium men's grooming. Fully AC. Opp. Food Plaza, Deoghar Rd, Tarapur 813221." />
      <meta property="og:url" content="https://singhworks.in/" />
      <meta name="twitter:title" content="Cafe 007 & 9XM Salon | Best Restaurant & Salon in Tarapur, Munger Bihar" />
      <meta name="twitter:description" content="Cafe 007 — best AC restaurant & cafe. 9XM Salon — premium men's grooming. Tarapur, Munger Bihar." />
    </Helmet>
  )
}

/* ─── SEO: Salon page ─────────────────────────────── */
function SalonHelmet() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://singhworks.in/salon#9xmsalon",
    "name": "9XM Salon",
    "alternateName": ["9XM Salon Tarapur", "Best Salon Tarapur", "Men's Grooming Salon Tarapur", "9XM Men Salon Munger"],
    "description": "Tarapur's #1 premium men's grooming salon. Expert haircuts, fades, beard grooming, facials, hair color & spa. Fully AC. Opposite Food Plaza, Deoghar Rd, Tarapur, Munger 813221, Bihar.",
    "url": "https://singhworks.in/salon",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Expert Stylists", "value": true }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opposite Food Plaza, Deoghar Road",
      "addressLocality": "Tarapur",
      "addressRegion": "Bihar",
      "postalCode": "813221",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.0177",
      "longitude": "86.4297"
    },
    "areaServed": [
      "Tarapur", "Munger", "Asarganj", "Sangrampur", "Sultanganj",
      "Kharagpur Bihar", "Jamalpur", "Tetiabambar", "Shambhuganj",
      "Gazipur Bihar", "Parbhara", "Ganaili", "Beladih", "Kamarganj"
    ],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "09:00", "closes": "21:00"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7", "reviewCount": "200", "bestRating": "5"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Grooming Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haircut & Fade" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Beard Grooming & Shave" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skin Facial & Cleanup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hair Color & Highlights" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hair Spa & Treatment" } }
      ]
    }
  })

  return (
    <Helmet>
      <title>9XM Salon Tarapur | Best Men's Haircut, Beard &amp; Grooming — Munger, Bihar</title>
      <meta name="description" content="9XM Salon — Best men's grooming salon in Tarapur, Munger Bihar. Expert haircuts, fades, beard styling, facials, hair color & spa. Fully AC. Serving Tarapur, Asarganj, Sangrampur & nearby areas. Walk-in welcome. Opp. Food Plaza, Deoghar Rd, Tarapur 813221." />
      <meta name="keywords" content="best salon Tarapur, men salon Tarapur, haircut Tarapur, beard salon Tarapur, grooming salon Munger, hair salon Asarganj, men haircut near me, facial salon Tarapur Bihar, 9XM Salon, best barber Tarapur, hair color Tarapur, spa Tarapur" />
      <link rel="canonical" href="https://singhworks.in/salon" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="9XM Salon | Best Men's Grooming in Tarapur, Munger Bihar" />
      <meta property="og:description" content="Expert haircuts, fades, beard grooming, facials & spa. Fully AC. Walk-in welcome. Opposite Food Plaza, Deoghar Rd, Tarapur, Munger 813221." />
      <meta property="og:url" content="https://singhworks.in/salon" />
      <meta name="twitter:title" content="9XM Salon | Best Men's Grooming in Tarapur, Munger Bihar" />
      <meta name="twitter:description" content="Expert haircuts, fades, beard grooming, facials & spa. Fully AC. Tarapur, Munger Bihar." />
      <script type="application/ld+json">{schema}</script>
    </Helmet>
  )
}

/* ─── SEO: Cafe page ──────────────────────────────── */
function CafeHelmet() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://singhworks.in/cafe#cafe007",
    "name": "Cafe 007",
    "alternateName": ["007 Cafe", "Cafe 007 Tarapur", "Best Cafe Tarapur", "Best Restaurant Tarapur", "Best Restro Tarapur", "AC Restaurant Tarapur", "AC Cafe Tarapur", "Singh Works Cafe", "Cafe 007 Munger"],
    "description": "Tarapur's best fully air-conditioned multi-cuisine cafe and restaurant. Pizza, burgers, momos, dosa, coffee, sandwiches. Family-friendly hangout. Opposite Food Plaza, Tarapur, Munger 813221.",
    "url": "https://singhworks.in/cafe",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹",
    "servesCuisine": ["Indian", "Continental", "Fast Food", "Chinese", "Street Food", "Beverages"],
    "hasMenu": "https://singhworks.in/cafe#menu",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Dine-In", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Takeaway", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Family Seating", "value": true }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opposite Food Plaza, Deoghar Road",
      "addressLocality": "Tarapur",
      "addressRegion": "Bihar",
      "postalCode": "813221",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.0177",
      "longitude": "86.4297"
    },
    "areaServed": [
      "Tarapur", "Munger", "Asarganj", "Sangrampur", "Sultanganj",
      "Kharagpur Bihar", "Jamalpur", "Tetiabambar", "Shambhuganj",
      "Gazipur Bihar", "Parbhara", "Ganaili", "Beladih", "Kamarganj"
    ],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00", "closes": "22:00"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5", "reviewCount": "120", "bestRating": "5"
    },
    "menu": {
      "@type": "Menu",
      "name": "007 Cafe Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection", "name": "Beverages",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Cold Coffee" },
            { "@type": "MenuItem", "name": "Masala Chai" },
            { "@type": "MenuItem", "name": "Mocktails" }
          ]
        },
        {
          "@type": "MenuSection", "name": "Fast Food",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Burger" },
            { "@type": "MenuItem", "name": "Pizza" },
            { "@type": "MenuItem", "name": "Sandwich" }
          ]
        },
        {
          "@type": "MenuSection", "name": "Indian Snacks",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Momos" },
            { "@type": "MenuItem", "name": "Dosa" },
            { "@type": "MenuItem", "name": "Chowmein" }
          ]
        }
      ]
    }
  })

  return (
    <Helmet>
      <title>Cafe 007 Tarapur | Best AC Restaurant, Cafe &amp; Restro in Tarapur Munger Bihar</title>
      <meta name="description" content="Cafe 007 — Tarapur's best fully AC restaurant & cafe. Dine-in & takeaway. Pizza, burger, momos, dosa, cold coffee, sandwich, chowmein & more. Family-friendly. Serving Tarapur, Asarganj, Sangrampur, Sultanganj & nearby. Opp. Food Plaza, Deoghar Rd, Tarapur 813221." />
      <meta name="keywords" content="Cafe 007, Cafe 007 Tarapur, best cafe Tarapur, best restaurant Tarapur, best restro Tarapur, AC cafe Tarapur, AC restaurant Tarapur, dine in Tarapur, takeaway Tarapur, food near me Tarapur, pizza Tarapur, burger Tarapur, momos Tarapur, dosa Tarapur, cold coffee Tarapur, sandwich Tarapur, chowmein Tarapur, fast food Tarapur, family restaurant Tarapur, cafe near Asarganj, restaurant near Asarganj, food near Sangrampur, cafe near Sultanganj, restaurant near Munger, eat out Tarapur Bihar, best hangout Tarapur, Cafe 007 Munger Bihar" />
      <link rel="canonical" href="https://singhworks.in/cafe" />
      <meta property="og:type" content="restaurant" />
      <meta property="og:title" content="Cafe 007 | Best AC Restaurant & Cafe in Tarapur, Munger Bihar" />
      <meta property="og:description" content="Tarapur's best AC restaurant & cafe — pizza, burger, momos, dosa, cold coffee & more. Dine-in & takeaway. Opp. Food Plaza, Deoghar Rd, Tarapur 813221." />
      <meta property="og:url" content="https://singhworks.in/cafe" />
      <meta name="twitter:title" content="Cafe 007 | Best AC Restaurant & Cafe in Tarapur, Munger Bihar" />
      <meta name="twitter:description" content="Pizza, burger, momos, dosa, cold coffee & more. Fully AC. Dine-in & takeaway. Opp. Food Plaza, Tarapur, Munger 813221." />
      <script type="application/ld+json">{schema}</script>
    </Helmet>
  )
}

/* ─── Routes ──────────────────────────────────────── */
function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <LandingHelmet />
                <Landing />
              </PageTransition>
            }
          />
          <Route
            path="/salon"
            element={
              <PageTransition>
                <SalonHelmet />
                <SalonApp />
              </PageTransition>
            }
          />
          <Route
            path="/cafe"
            element={
              <PageTransition>
                <CafeHelmet />
                <CafeApp />
              </PageTransition>
            }
          />
          <Route path="*" element={<PageTransition><LandingHelmet /><Landing /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

/* Root app */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="noise-overlay" aria-hidden="true" />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  )
}
