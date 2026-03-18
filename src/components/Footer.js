import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h3>Varanasi Computer Institute</h3>
          <p>
            We provide high-quality computer education, practical training,
            and career-focused courses designed to build strong technical
            skills for students and professionals.
          </p>

          <p className="copyright">
            © {new Date().getFullYear()} Varanasi Computer Institute.  
            All Rights Reserved.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Solution">Solutions</Link></li>
            <li><Link to="/Product">Products</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Career">Career</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Popular Courses</h4>
          <ul>
            <li>B.Tech</li>
            <li>M.Tech</li>
            <li>Diploma</li>
            <li>BCA</li>
            <li>MCA</li>
            <li>M.Com</li>
            <li>B.Com</li>
            <li>BBA</li>
            <li>MBA</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Details</h4>

          <p>📍 Varanasi, Uttar Pradesh</p>
          <p>📞 +91 8188935865</p>
          <p>✉ roshankewat807@gmail.com</p>

          <a
            href="https://wa.me/8188935865"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <ul>
          <li><Link to="/sitemap">Sitemap</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/student-policy">Student Policy</Link></li>
        </ul>
      </div>

    </footer>
  );
}