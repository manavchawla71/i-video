import React from "react";
import { videos } from "../backend/videos";
import { useMainContext } from "../context/MainContext";
import "./Filters.css";

const Filters = () => {
  const { selectedCategory, setSelectedCategory } = useMainContext();

  const categories = ["All", "Comedy", "Action", "Horror", "Thriller"];

  const onCategoryFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex category-chips-container">
      {/* <h3>Filters</h3> */}
      {categories.map((category) => (
        <li key={category}>
          <button
            className={`category-chips pointer${
              selectedCategory === category ? " active" : ""
            }`}
            onClick={() => onCategoryFilterChange(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Filters;
