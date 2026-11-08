import React from "react";
import BranchDivider from "./BranchDivider";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { text } = useLanguage();

  return (
    <section id="home">
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{text.heroEyebrow}</span>
            <h1>{text.heroTitle}</h1>
            <p className="hero-lead">{text.heroIntro}</p>
            <div className="hero-actions">
              <a href="#menu" className="btn btn-primary">
                {text.seeMenu}
              </a>
              <a href="#contact" className="btn btn-ghost">
                {text.reserve}
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>1998</strong>
                <span>{text.statYear}</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>{text.statOil}</span>
              </div>
              <div>
                <strong>{text.statDaily}</strong>
                <span>{text.statBread}</span>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="images/hero-mezze.jpg"
              alt={text.heroImage}
            />
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow center">{text.homeFavoritesEyebrow}</span>
          <BranchDivider />
          <h2 className="section-title center">{text.homeFavoritesTitle}</h2>
          <div className="card-grid">
            <article className="card">
              <img
                src="images/hummus.jpg"
                alt={text.hummusImage}
              />
              <div className="card-body">
                <h3>{text.hummusTitle}</h3>
                <p>{text.hummusDescription}</p>
              </div>
            </article>
            <article className="card">
              <img
                src="images/musakhan.jpg"
                alt={text.musakhanImage}
              />
              <div className="card-body">
                <h3>{text.musakhanTitle}</h3>
                <p>{text.musakhanDescription}</p>
              </div>
            </article>
            <article className="card">
              <img
                src="images/knafeh.jpg"
                alt={text.knafehImage}
              />
              <div className="card-body">
                <h3>{text.knafehTitle}</h3>
                <p>{text.knafehDescription}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section" style={{ background: "var(--cream-2)" }}>
        <div className="wrap story-grid">
          <div className="story-media">
            <img
              src="images/restaurant-interior.jpg"
              alt={text.restaurantImage}
            />
          </div>
          <div className="story-copy">
            <span className="eyebrow">{text.storyEyebrow}</span>
            <h2>{text.storyTitle}</h2>
            <p>{text.storyIntro}</p>
            <a href="#about" className="btn btn-ghost">
              {text.readStory}
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow center">{text.valuesEyebrow}</span>
          <h2 className="section-title center">{text.homeValuesTitle}</h2>
          <div className="values-grid">
            <div className="value">
              <div className="value-icon">
                <i className="fa-solid fa-wheat-awn"></i>
              </div>
              <h3>{text.breadTitle}</h3>
              <p>{text.breadDescription}</p>
            </div>
            <div className="value">
              <div className="value-icon">
                <i className="fa-solid fa-oil-can"></i>
              </div>
              <h3>{text.oilTitle}</h3>
              <p>{text.oilDescription}</p>
            </div>
            <div className="value">
              <div className="value-icon">
                <i className="fa-solid fa-people-roof"></i>
              </div>
              <h3>{text.sharingTitle}</h3>
              <p>{text.sharingDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="specials-banner">
            <div>
              <span className="badge">{text.specialBadge}</span>
              <h2>{text.specialTitle}</h2>
              <p>{text.specialDescription}</p>
            </div>
            <a href="#menu" className="btn btn-light">
              {text.fullMenu}
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}