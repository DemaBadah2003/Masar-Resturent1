import { categories } from "../data/categories";
import { initialItems } from "../data/initialItems";

export const STORAGE_KEY = "zaytoun-menu-items";

export function isMenuItem(item) {
  return (
    item &&
    typeof item.id === "string" &&
    categories.some((category) => category.id === item.category) &&
    typeof item.nameEn === "string" &&
    typeof item.nameAr === "string" &&
    typeof item.descriptionEn === "string" &&
    typeof item.descriptionAr === "string" &&
    Number.isFinite(item.price) &&
    item.price >= 0 &&
    typeof item.available === "boolean"
  );
}

export function readMenu() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === null) return { items: initialItems, error: false };
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || !parsed.every(isMenuItem)) {
      throw new Error("Stored menu data has an invalid shape.");
    }
    return { items: parsed, error: false };
  } catch (error) {
    console.error("Could not load the saved menu.", error);
    return { items: initialItems, error: true };
  }
}