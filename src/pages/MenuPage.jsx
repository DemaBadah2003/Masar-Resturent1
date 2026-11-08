import React, { useState } from "react";
import Layout from "../components/Layout";
import CategoryFilters from "../components/CategoryFilters";
import DishCard from "../components/DishCard";
import useMenu from "../hooks/useMenu";
import { useLanguage } from "../context/LanguageContext";

export default function MenuPage() {
  const { text } = useLanguage();
  const { items, error } = useMenu();
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleItems = items.filter(
    (item) =>
      item.available &&
      (activeCategory === "all" || item.category === activeCategory)
  );

  return (
    <Layout title={text.title} intro={text.intro} error={error}>
      <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
      {visibleItems.length ? (
        <div className="digital-menu-grid">
          {visibleItems.map((item) => (
            <DishCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="empty-menu">{text.empty}</p>
      )}
    </Layout>
  );
}