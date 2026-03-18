import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div
        className="contact-banner"
        style={{ backgroundImage: "url('/pic/contact.png')" }}
      >
       
      </div>
 <h1>Contact Us</h1>
      <div className="contact-info container">

        <div className="contact-details">
          <h3>PRNX Headquarters</h3>

          <p>
            12030 Sunrise Valley Drive,<br />
            Ste. 210<br />
            Reston, VA 20191
          </p>

          <p><strong>Phone:</strong> 818-893-5865</p>
          <p><strong>Email:</strong> roshankewat807@gmail.com</p>
        </div>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Reston,VA&output=embed"
            width="350"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>

      <div className="contact-form container">
        <h3>Send Us a Message</h3>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;