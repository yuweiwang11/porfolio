import './Footer.css'

export default function Footer() {
  const date = new Date()
  const thisYear = date.getFullYear()
  return (
    <>
      <div className="footer-area">
        <div className="footer">© {thisYear} Yuwei Wang. All rights reserved.</div>
        <div className="footer">Built with ❤️ in Aotearoa</div>
      </div>
    </>
  )
}
