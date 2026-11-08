import React, { useState } from "react";
import Layout from "../components/Layout";
import DishForm from "../components/DishForm";
import DishList from "../components/DishList";
import QRPanel from "../components/QRPanel";
import useMenu from "../hooks/useMenu";
import { useLanguage } from "../context/LanguageContext";

const emptyForm = {
  category: "mezze",
  nameEn: "",
  nameAr: "",
  descriptionEn: "",
  descriptionAr: "",
  price: "",
};

export default function AdminPage() {
  const { text } = useLanguage();
  const { items, error, addItem, updateItem, removeItem, toggleAvailability } = useMenu();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [notice, setNotice] = useState("");

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function saveItem(event) {
    event.preventDefault();
    const price = Number(form.price);

    if (
      !form.nameEn.trim() ||
      !form.nameAr.trim() ||
      !form.descriptionEn.trim() ||
      !form.descriptionAr.trim() ||
      !Number.isFinite(price) ||
      price < 0
    ) {
      setNotice(text.required);
      return;
    }

    const existing = items.find((current) => current.id === editingId);
    const item = {
      ...existing,
      ...form,
      id: editingId || `dish-${Date.now()}`,
      nameEn: form.nameEn.trim(),
      nameAr: form.nameAr.trim(),
      descriptionEn: form.descriptionEn.trim(),
      descriptionAr: form.descriptionAr.trim(),
      price,
      available: existing ? existing.available : true,
    };

    if (editingId) updateItem(item);
    else addItem(item);

    setNotice(text.saved);
    resetForm();
  }

  function editItem(item) {
    setForm({
      category: item.category,
      nameEn: item.nameEn,
      nameAr: item.nameAr,
      descriptionEn: item.descriptionEn,
      descriptionAr: item.descriptionAr,
      price: String(item.price),
    });
    setEditingId(item.id);
    setNotice("");
  }

  function deleteItem(id) {
    if (!window.confirm(text.deleteConfirm)) return;
    removeItem(id);
    if (editingId === id) resetForm();
  }

  return (
    <Layout title={text.adminTitle} intro={text.adminIntro} error={error}>
      {notice && <p className="menu-notice" role="status">{notice}</p>}

      <div className="dashboard-layout">
        <section className="dashboard-panel">
          <div className="dashboard-panel-heading">
            <div>
              <h2>{text.adminTitle}</h2>
              <p>{text.demo}</p>
            </div>
          </div>

          <DishForm
            form={form}
            setForm={setForm}
            editingId={editingId}
            onSubmit={saveItem}
            onCancel={resetForm}
          />

          <DishList
            items={items}
            onToggle={toggleAvailability}
            onEdit={editItem}
            onDelete={deleteItem}
          />
        </section>

        <QRPanel />
      </div>
    </Layout>
  );
}