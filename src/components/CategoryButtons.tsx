"use client";

import React from "react";
import { categories } from "@/data/categories";

type CategoryButtonsProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryButtons = ({ activeCategory, onCategoryChange }: CategoryButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-3 py-1 rounded-full border border-1 text-xs tracking-brand cursor-pointer md:text-light font-light font-lexend transition-all duration-300 ${
            activeCategory === cat.id
              ? "bg-dark-01 text-light-02 shadow-lg"
              : "bg-light-02 text-dark-01 hover:bg-primary/10"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
