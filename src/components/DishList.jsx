import React from "react";
import { categories } from "../data/categories";
import { useLanguage } from "../context/LanguageContext";

export default function DishList({ items, onToggle, onEdit, onDelete }) {
  const { text, isArabic } = useLanguage();

  return (
    <div className="dashboard-dish-list">
      <h3>
        {isArabic ? "الأطباق الحالية" : "Current dishes"} <span>{items.length}</span>
      </h3>
      {items.map((item) => (
        <article
          className={`dashboard-dish ${item.available ? "" : "is-unavailable"}`}
          key={item.id}
        >
          <div className="dashboard-dish-info">
            <strong>{isArabic ? item.nameAr : item.nameEn}</strong>
            <span>
              {categories.find((category) => category.id === item.category)?.[isArabic ? "ar" : "en"]}
              {" · $"}
              {item.price.toFixed(2)}
            </span>
          </div>
          <div className="dashboard-dish-actions">
            <button
              type="button"
              className={`availability-toggle ${item.available ? "is-available" : "is-unavailable"}`}
              onClick={() => onToggle(item.id)}
              aria-pressed={item.available}
              aria-label={
                item.available ? text.unavailableToggle : text.availableToggle
              }
            >
              <span>{item.available ? text.available : text.unavailable}</span>
              <span className="availability-switch" aria-hidden="true">
                <span />
              </span>
            </button>
            <button type="button" className="text-button" onClick={() => onEdit(item)}>
              {text.edit}
            </button>
            <button type="button" className="text-button danger" onClick={() => onDelete(item.id)}>
              {text.remove}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}