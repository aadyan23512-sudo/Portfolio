import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Typewriter from './Typewriter.jsx'
import './DeviceDuo.css'

export default function DeviceDuo() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      className="duo"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="duo__browser"
        style={{ rotateX: rotX, rotateY: rotY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="duo__bar">
          <span className="duo__dot" style={{ background: '#ff5f57' }} />
          <span className="duo__dot" style={{ background: '#febc2e' }} />
          <span className="duo__dot" style={{ background: '#28c840' }} />
          <span className="duo__url">
            <Typewriter words={['index.html', 'App.jsx', 'components/Hero.jsx']} />
          </span>
        </div>
        <div className="duo__screen">
          <div className="duo__block duo__block--wide" />
          <div className="duo__row">
            <div className="duo__block duo__block--tall" />
            <div className="duo__col">
              <div className="duo__block duo__block--line" />
              <div className="duo__block duo__block--line short" />
              <div className="duo__block duo__block--chip" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="duo__phone"
        style={{ rotateX: rotX, rotateY: rotY }}
        initial={{ opacity: 0, y: 40, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="duo__notch" />
        <div className="duo__phone-screen">
          <div className="duo__block duo__block--pill" />
          <div className="duo__block duo__block--wide small" />
          <div className="duo__block duo__block--card" />
          <div className="duo__phone-tabbar">
            <span />
            <span />
            <span />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="duo__badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        one codebase mindset,<br />two native feels
      </motion.div>
    </div>
  )
}
