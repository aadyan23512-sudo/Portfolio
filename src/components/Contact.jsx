import { motion } from 'framer-motion'
import './Contact.css'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter / X', href: 'https://twitter.com/yourusername' },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="contact__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact__bar">
            <span className="duo__dot" style={{ background: '#ff5f57' }} />
            <span className="duo__dot" style={{ background: '#febc2e' }} />
            <span className="duo__dot" style={{ background: '#28c840' }} />
            <span className="contact__bar-title">contact.js</span>
          </div>

          <div className="contact__body">
            <p className="contact__comment">// let's build something</p>
            <h2>
              Have a project in mind?
              <br />
              <span className="hero__accent">Send it over.</span>
            </h2>
            <p className="contact__lede">
              Whether it's a web app, a mobile build, or something that needs
              both — I'd like to hear about it.
            </p>

            <a href="mailto:hello@aadyanadil.dev" className="btn btn-primary contact__email">
              hello@aadyanadil.dev
            </a>

            <div className="contact__socials">
              {SOCIALS.map((s) => (
                <a href={s.href} key={s.label} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
