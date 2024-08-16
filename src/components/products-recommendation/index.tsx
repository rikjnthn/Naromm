import React from "react";

import ProductCard from "../product-card";
import { ProductType } from "@/interface";

const ProductsRecommendation = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="my-16 mb-40 flex flex-col px-5 md:items-center md:px-14 lg:px-24">
      <h2 className="text-xl font-semibold text-primary md:mt-52 md:text-3xl md:font-bold">
        Other Products
      </h2>
      <div className="hide-scrollbar product-recommendation">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsRecommendation;
