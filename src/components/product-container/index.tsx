"use client";
import React, { useState } from "react";

import ProductCard from "../product-card";
import { ProductType, CategoryType } from "@/interface";
import SearchBar from "../search-bar";

const ProductContainer = ({ products }: { products: ProductType[] }) => {
  const [category, setCategory] = useState<CategoryType>("All");
  const [search, setSearch] = useState<string>("");

  const filteredProducts = products
    .filter((product) => {
      if (category === "All") return true;

      return product.category === category;
    })
    .map((product) => {
      if (search.trim() === "") return product;

      return product.name.toLowerCase().includes(search.toLowerCase().trim())
        ? product
        : undefined;
    })
    .filter((product) => !!product);

  return (
    <div>
      <SearchBar
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="product-container">
        {filteredProducts.map((productInfo) => (
          <ProductCard key={productInfo.id} {...productInfo} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
