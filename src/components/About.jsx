import { motion } from 'framer-motion'
import './About.css'

const FACTS = [
  { label: 'Based in', value: 'Add your city' },
  { label: 'Focus', value: 'Web & mobile interfaces' },
  { label: 'Comfortable with', value: 'HTML, CSS, JS, React, React Native' },
  { label: 'Currently', value: 'Open to opportunities' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">About</span>
          <h2>Hi, I'm Aadyan.</h2>
          <p className="about__lede">
            I'm a developer who likes owning an interface end to end — from the
            first markup on a page to the last polish on a mobile screen. HTML,
            CSS and JavaScript are the foundation; React and React Native are
            where that foundation turns into real products people use, on the
            web and in their pocket.
          </p>
          <p className="about__lede">
            This section is a starting point — add a few lines about your
            background, how you learned to build, and what kind of work you're
            looking for next.
          </p>
        </motion.div>

        <motion.dl
          className="about__facts"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {FACTS.map((f) => (
            <div className="about__fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
