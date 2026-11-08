
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { text } = useLanguage();

  return (
    <section id="contact">
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow center">{text.findUs}</span>
          <h1>{text.contactHeroTitle}</h1>
          <p>{text.contactHeroIntro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">{text.getInTouch}</span>
            <h2>{text.contactTitle}</h2>
            <p>{text.contactIntro}</p>

            <ul className="contact-info-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>{text.addressLabel}</h4>
                  <p>{text.address}</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h4>{text.phoneLabel}</h4>
                  <p>(555) 022-7714</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>{text.emailLabel}</h4>
                  <p>hello@zaytoun-restaurant.com</p>
                </div>
              </li>
            </ul>

            {/* معلومات السوشيال ميديا الإضافية داخل قسم التواصل */}
            <div
              className="social-channels-box"
              style={{
                marginTop: "24px",
                padding: "16px",
                background: "var(--cream-2)",
                borderRadius: "8px",
              }}
            >
              <h4 style={{ marginBottom: "10px", color: "var(--primary)" }}>
                {text.socialTitle}
              </h4>
              <p style={{ marginBottom: "8px", fontSize: "0.95rem" }}>
                <i
                  className="fa-brands fa-instagram"
                  style={{ marginRight: "8px", color: "var(--accent)" }}
                ></i>
                <strong>Instagram:</strong> @zaytoun.restaurant ({text.instagramInfo})
              </p>
              <p style={{ marginBottom: "8px", fontSize: "0.95rem" }}>
                <i
                  className="fa-brands fa-facebook-f"
                  style={{ marginRight: "8px", color: "var(--accent)" }}
                ></i>
                <strong>Facebook:</strong> {text.facebookInfo}
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ marginRight: "8px", color: "var(--accent)" }}
                ></i>
                <strong>WhatsApp:</strong> (555) 022-7715 ({text.whatsappInfo})
              </p>
            </div>

            <table className="hours-table" style={{ marginTop: "24px" }}>
              <tbody>
                <tr>
                  <td>{text.mondayThursday}</td>
                  <td>12:00 – 22:00</td>
                </tr>
                <tr>
                  <td>{text.fridaySaturday}</td>
                  <td>12:00 – 23:00</td>
                </tr>
                <tr>
                  <td>{text.sunday}</td>
                  <td>13:00 – 21:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">{text.name}</label>
            <input id="name" type="text" placeholder={text.yourName} required />
            <label htmlFor="email">{text.emailLabel}</label>
            <input
              id="email"
              type="email"
              placeholder={text.emailPlaceholder}
              required
            />
            <label htmlFor="party">{text.reason}</label>
            <select id="party">
              <option>{text.reservationReason}</option>
              <option>{text.eventReason}</option>
              <option>{text.cateringReason}</option>
              <option>{text.generalReason}</option>
            </select>
            <label htmlFor="message">{text.message}</label>
            <textarea
              id="message"
              rows="5"
              placeholder={text.messagePlaceholder}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              {text.sendMessage}
            </button>
          </form>
        </div>

        <div className="wrap">
          <div className="map-embed">
            <span>
              <i className="fa-solid fa-map-location-dot"></i>&nbsp; {text.address}
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}