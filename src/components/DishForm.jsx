import React from "react";
import { categories } from "../data/categories";
import { useLanguage } from "../context/LanguageContext";

export default function DishForm({ form, setForm, editingId, onSubmit, onCancel }) {
  const { text, isArabic } = useLanguage();

  const update = (field) => (event) =>
    setForm({ ...form, [field]: event.target.value });

  return (
    <form className="menu-editor" onSubmit={onSubmit}>
      <h3>{editingId ? text.edit : text.add}</h3>

      <label>
        {text.category}
        <select value={form.category} onChange={update("category")}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category[isArabic ? "ar" : "en"]}
            </option>
          ))}
        </select>
      </label>

      <div className="menu-form-grid">
        <label>
          {text.nameAr}
          <input required value={form.nameAr} onChange={update("nameAr")} />
        </label>
        <label>
          {text.nameEn}
          <input required value={form.nameEn} onChange={update("nameEn")} />
        </label>
        <label>
          {text.descriptionAr}
          <textarea required rows="2" value={form.descriptionAr} onChange={update("descriptionAr")} />
        </label>
        <label>
          {text.descriptionEn}
          <textarea required rows="2" value={form.descriptionEn} onChange={update("descriptionEn")} />
        </label>
      </div>

      <label className="menu-price-field">
        {text.price}
        <input
          required
          type="number"
          min="0"
          step="0.01"
          value={form.price}
          onChange={update("price")}
        />
      </label>

      <div className="menu-form-actions">
        <button className="btn btn-primary" type="submit">{text.save}</button>
        {editingId && (
          <button className="btn btn-ghost" type="button" onClick={onCancel}>
            {text.cancel}
          </button>
        )}
      </div>
    </form>
  );
}