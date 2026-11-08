import { useEffect, useState } from "react";
import { readMenu, STORAGE_KEY } from "../utils/storage";

export default function useMenu() {
  const [menuState, setMenuState] = useState(readMenu);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(menuState.items));
      setMenuState((current) =>
        current.error ? { ...current, error: false } : current
      );
    } catch (error) {
      console.error("Could not save the menu.", error);
      setMenuState((current) =>
        current.error ? current : { ...current, error: true }
      );
    }
  }, [menuState.items]);

  const addItem = (item) =>
    setMenuState((current) => ({
      ...current,
      items: [...current.items, item],
    }));

  const updateItem = (item) =>
    setMenuState((current) => ({
      ...current,
      items: current.items.map((currentItem) =>
        currentItem.id === item.id ? item : currentItem
      ),
    }));

  const removeItem = (id) =>
    setMenuState((current) => ({
      ...current,
      items: current.items.filter((item) => item.id !== id),
    }));

  const toggleAvailability = (id) =>
    setMenuState((current) => ({
      ...current,
      items: current.items.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      ),
    }));

  return {
    items: menuState.items,
    error: menuState.error,
    addItem,
    updateItem,
    removeItem,
    toggleAvailability,
  };
}