import { motion } from 'framer-motion'
import './Skills.css'

const SKILLS = [
  {
    name: 'HTML',
    role: 'Structure',
    note: 'Semantic markup that stays accessible and easy to reason about as a page grows.',
  },
  {
    name: 'CSS',
    role: 'Look & feel',
    note: 'Layouts built on flexbox and grid, with animation used to guide attention, not distract from it.',
  },
  {
    name: 'JavaScript',
    role: 'Behaviour',
    note: 'The logic layer connecting interface to data — from small interactions to full app state.',
  },
  {
    name: 'React',
    role: 'Web apps',
    note: 'Component-driven interfaces for the browser, built to stay fast as features are added.',
  },
  {
    name: 'React Native',
    role: 'Mobile apps',
    note: 'The same component mindset, carried into iOS and Android with a native feel.',
  },
]

const TICKER_ITEMS = [...SKILLS, ...SKILLS]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="skills__marquee" aria-hidden="true">
        <div className="skills__track">
          {TICKER_ITEMS.map((s, i) => (
            <span className="skills__ticker-item" key={i}>
              {s.name}
              <span className="skills__ticker-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>Five tools, one way of thinking</h2>
          <p>
            Every layer below feeds the next — structure, style and logic on the
            web, then the same instincts applied to native mobile screens.
          </p>
        </div>

        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <motion.div
              className="skills__card"
              key={skill.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="skills__card-index">0{i + 1}</span>
              <h3>{skill.name}</h3>
              <span className="skills__card-role">{skill.role}</span>
              <p>{skill.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
