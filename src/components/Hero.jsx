import { motion } from 'framer-motion'
import DeviceDuo from './DeviceDuo.jsx'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={item}>
            Web &amp; Mobile Developer
          </motion.span>

          <motion.h1 variants={item}>
            I build interfaces
            <br />
             that hold up
            <br />
            <span className="hero__accent">on any screen.</span>
          </motion.h1>

          <motion.p className="hero__lede" variants={item}>
            From a browser tab to a phone in someone's hand — I design and ship
            products with HTML, CSS and JavaScript on the web, and carry the
            same craft into React Native for mobile.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#work" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div className="hero__stack" variants={item}>
            <span className="hero__stack-label">Core stack</span>
            <div className="hero__stack-tags">
              {['HTML', 'CSS', 'JavaScript', 'React', 'React Native'].map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <DeviceDuo />
        </motion.div>
      </div>
    </section>
  )
}
