import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function DishCard({ item }) {
  const { isArabic } = useLanguage();

  return (
    <article className="digital-menu-item">
      <div className="digital-menu-item-heading">
        <h2>{isArabic ? item.nameAr : item.nameEn}</h2>
        {item.tagEn && (
          <span className="dish-tag">{isArabic ? item.tagAr : item.tagEn}</span>
        )}
      </div>
      <p>{isArabic ? item.descriptionAr : item.descriptionEn}</p>
      <strong className="digital-menu-price">${item.price.toFixed(2)}</strong>
    </article>
  );
}