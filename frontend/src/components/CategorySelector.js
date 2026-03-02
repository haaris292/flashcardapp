import React, { useEffect, useState } from "react";
import { getCategories } from "../api";

function CategorySelector({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
