// Footer.jsx
import "./footer.scss";
import { Link } from "react-router-dom";
import GridLayout from "../others/GridLayout";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="span-three-column">
        <li>
          <a href="/portfolio/">Pictogram</a>
        </li>
        <li>
          <a href="/portfolio/">Design</a>
        </li>
        <li>
          <a href="/portfolio/">Code</a>
        </li>
      </ul>
      <div className="footer-content"></div>

      {/* Sitemap Grid */}
      <div className="sitemap">
        {/* Column 1: Projects */}
        <div className="sitemap-category">
          <p></p>
        </div>
        <div className="sitemap-category">
          <p>Scroll Up</p>
        </div>
        {/* Column 2: Projects */}
        <div className="sitemap-category">
          <Link to="/portfolio">
            <h3>Portfolio</h3>
          </Link>
          <Link to="/portfolio/#branding">Branding</Link>
          <Link to="/portfolio/#uxui">UX/UI Design</Link>
          <Link to="/portfolio/#webdev">Web Development</Link>
        </div>

        {/* Column 3: Company */}
        <div className="sitemap-category">
          <Link to="/">
            <h3>Visual Studio</h3>
          </Link>
          <Link to="/about">About AVZ</Link>
          <Link to="/about">Impressum</Link>
          <Link to="/about">Data & Privacy</Link>
        </div>

        {/* Column 4: Contact */}
        <div className="sitemap-category">
          <Link to="/Contact">
            <h3>Contact</h3>
          </Link>
          <Link to="/contact">Contact Me</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright */}
      <section className="copyright">
        <GridLayout columns={6}>
          <h4 className="vertical-text span-two-column">
            Some photos, <br /> some moving images
          </h4>
          <img src="/public/artichoke.png" className="span-four-column" />
        </GridLayout>
        <p>
          © <span>@artichoke.vz</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;