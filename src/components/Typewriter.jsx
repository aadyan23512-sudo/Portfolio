import { useEffect, useState } from 'react'

export default function Typewriter({ words, typingMs = 65, pauseMs = 1400, deletingMs = 35 }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingMs)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), pauseMs)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingMs)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingMs, pauseMs, deletingMs])

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter__cursor">|</span>
    </span>
  )
}
