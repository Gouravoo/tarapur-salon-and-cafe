import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return p + Math.random() * 8 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader-content">
            <motion.div
              className="loader-logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="loader-9xm">9XM</span>
              <span className="loader-salon">SALON</span>
            </motion.div>

            <motion.div
              className="loader-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Tarapur's Premium Grooming Experience
            </motion.div>

            <div className="loader-bar-wrap">
              <motion.div
                className="loader-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                style={{ originX: 0 }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="loader-percent">{Math.min(100, Math.floor(progress))}%</div>
          </div>

          <div className="loader-corner loader-corner--tl">9XM</div>
          <div className="loader-corner loader-corner--tr">SINCE 2019</div>
          <div className="loader-corner loader-corner--bl">TARAPUR, MUNGER</div>
          <div className="loader-corner loader-corner--br">BIHAR</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
