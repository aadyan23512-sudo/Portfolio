import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Aadyan Adil</span>
        <span className="footer__made"></span>
      </div>
    </footer>
  )
}
