import { motion } from 'framer-motion'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Project One',
    platform: 'Web · React',
    desc: 'Replace this with a real product you shipped — what it does, and the problem it solves for its users.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/aadyan23512-sudo/Kfc-clone-Project.git',
    accent: 'accent',
  },
  {
    title: 'Project Two',
    platform: 'Mobile · React Native',
    desc: 'Swap in a React Native app here — mention the platforms it runs on and one detail you are proud of.',
    tags: ['React Native', 'JavaScript'],
    link: '',
    accent: 'teal',
  },
  {
    title: 'Project Three',
    platform: 'Web · HTML / CSS / JS',
    desc: 'KFC clone webapp built with HTML, CSS and JavaScript. It is a responsive website that looks good on all devices.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/aadyan23512-sudo/Kfc-clone-Project.git',
    accent: 'coral',
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Things I've shipped</h2>
          <p>
            A few placeholders to start from — swap in real projects, links and
            screenshots as you add them.
          </p>
        </div>

        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <motion.article
              className={`projects__card projects__card--${p.accent}`}
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="projects__card-top">
                <span className="projects__platform">{p.platform}</span>
                <span className="projects__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <a href={p.link}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </a>
              <div className="projects__tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
