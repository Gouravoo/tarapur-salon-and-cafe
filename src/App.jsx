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

/* Routes with animated transitions */
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
                <Helmet>
                  <title>007 Tarapur | Salon &amp; Cafe — Munger, Bihar</title>
                  <meta name="description" content="007 Tarapur — Tarapur's premium destination. Choose between 9XM Salon and Cafe 007. Munger, Bihar." />
                </Helmet>
                <Landing />
              </PageTransition>
            }
          />
          <Route
            path="/salon"
            element={
              <PageTransition>
                <Helmet>
                  <title>9XM Salon | Premium Men's Grooming — Tarapur, Munger</title>
                  <meta name="description" content="9XM Salon — Tarapur's finest men's grooming salon. Expert haircuts, beard styling, facials and more. Opposite Food Plaza, Tarapur, Munger, Bihar." />
                </Helmet>
                <SalonApp />
              </PageTransition>
            }
          />
          <Route
            path="/cafe"
            element={
              <PageTransition>
                <Helmet>
                  <title>Cafe 007 | Premium Cafe — Tarapur, Munger</title>
                  <meta name="description" content="Cafe 007 — Your favourite cafe in Tarapur, Munger, Bihar. Coffee, burgers, pizza, momos and more. Order online now." />
                </Helmet>
                <CafeApp />
              </PageTransition>
            }
          />
          <Route path="*" element={<PageTransition><Landing /></PageTransition>} />
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
