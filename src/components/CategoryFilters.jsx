import React from "react";
import { categories } from "../data/categories";
import { useLanguage } from "../context/LanguageContext";

export default function CategoryFilters({ active, onChange }) {
  const { text, isArabic } = useLanguage();

  return (
    <nav className="menu-category-filters" aria-label={text.menu}>
      <button
        type="button"
        className={active === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        {text.all}
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={category.id}
          className={active === category.id ? "active" : ""}
          onClick={() => onChange(category.id)}
        >
          {category[isArabic ? "ar" : "en"]}
        </button>
      ))}
    </nav>
  );
}