import React from 'react'
import '../stylesheets/footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social-row">
        <div className="footer-col">
          <div className="footer-links-1 footer-links">
            <a href="/#contact" className="foot-link">
              contact
            </a>
            <a href="/#about" className="foot-link">
              about
            </a>
            <a href="/support" className="foot-link">
              support
            </a>
            <a href="/services" className="foot-link">
              careers
            </a>
          </div>
          <div className="footer-links-2 footer-links">
            <a
              href="https://www.youtube.com/channel/UCyMifqUrSntvvrrGMaVPkrw/community?lb=UgwZRm2WrR2BqVk_ho54AaABCQ"
              className="foot-link"
            >
              access
            </a>
            <a href="https://lnkd.in/g6E72yBF" className="foot-link">
              subscribe
            </a>
            <a
              href="https://www.linkedin.com/company/fpritvik/"
              className="foot-link"
            >
              newsletter
            </a>
            <a
              href="https://www.linkedin.com/company/fpritvik/"
              className="foot-link"
            >
              blog
            </a>
          </div>
        </div>
        <div className="socials">
          <div className="social-row">
            <a href="https://twitter.com/ritvikdashora">
              <i className="fab fa-twitter social-icon"></i>
            </a>
            <a href="https://www.linkedin.com/company/fpritvik/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="social-row">
            <a href="https://www.patreon.com/fpritvik">
              <i className="fab fa-patreon"></i>
            </a>
            <a href="https://www.instagram.com/fp.ritvik/?hl=en">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-logo-copy">
        <div className="footer-logo">
          <span className="footer-brand">
            <i className="fas fa-chart-line"></i> FPRITVIK
          </span>
        </div>
        <span className="copy">&copy; 2022 FPR</span>
      </div>
    </div>
  );
}

export default Footer