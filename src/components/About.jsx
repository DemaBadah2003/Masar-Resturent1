import React from "react";
import BranchDivider from "./BranchDivider";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { text } = useLanguage();

  return (
    <section id="about">
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow center">{text.aboutEyebrow}</span>
          <h1>{text.aboutTitle}</h1>
          <p>{text.aboutIntro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap story-grid">
          <div className="story-media">
            <img src="images/olive-grove.jpg" alt={text.oliveGroveImage} />
          </div>
          <div className="story-copy">
            <span className="eyebrow">1998</span>
            <h2>{text.beginningTitle}</h2>
            <p>{text.beginningDescription}</p>
            <p>{text.openingDescription}</p>
          </div>
        </div>
      </section>

      <BranchDivider />

      <section
        className="section"
        style={{ background: "var(--cream-2)", paddingTop: "56px" }}
      >
        <div className="wrap story-grid">
          <div className="story-copy">
            <span className="eyebrow">{text.grove}</span>
            <h2>{text.ourOilTitle}</h2>
            <p>{text.ourOilDescription}</p>
            <p>{text.oilTradition}</p>
          </div>
          <div className="story-media">
            <img src="images/olive-oil.jpg" alt={text.oliveOilImage} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow center">{text.guidesEyebrow}</span>
          <h2 className="section-title center">
            {text.cookingTitle}
          </h2>
          <div className="values-grid">
            <div className="value">
              <div className="value-icon">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h3>{text.familyRecipes}</h3>
              <p>{text.familyRecipesDescription}</p>
            </div>
            <div className="value">
              <div className="value-icon">
                <i className="fa-solid fa-fire-burner"></i>
              </div>
              <h3>{text.slowCooking}</h3>
              <p>{text.slowCookingDescription}</p>
            </div>
            <div className="value">
              <div className="value-icon">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <h3>{text.tableMade}</h3>
              <p>{text.tableMadeDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream-2)" }}>
        <div className="wrap">
          <span className="eyebrow center">{text.kitchenEyebrow}</span>
          <h2 className="section-title center">{text.teamTitle}</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="images/chef-layla.jpg"
                alt={text.chefImage}
              />
              <h3>Layla Awad</h3>
              <span>{text.chefRole}</span>
            </div>
            <div className="team-member">
              <img
                src="images/baker-omar.jpg"
                alt={text.bakerImage}
              />
              <h3>Omar Nasser</h3>
              <span>{text.bakerRole}</span>
            </div>
            <div className="team-member">
              <img
                src="images/manager-hana.jpg"
                alt={text.managerImage}
              />
              <h3>Hana Yousef</h3>
              <span>{text.managerRole}</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}