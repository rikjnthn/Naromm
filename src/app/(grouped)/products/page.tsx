import { readFile } from "fs/promises";

import { ProductType } from "@/interface";
import ProductContainer from "@/components/product-container";

export default async function Page() {
  const data = await readFile(
    process.cwd() + "/src/data/json/products.json",
    "utf-8",
  );

  const products = JSON.parse(data).products as Array<ProductType>;

  return (
    <div className="lg:mx-auto lg:max-w-7xl">
      <div className="min-height-full mt-[61px] md:mt-[90px] lg:mt-[120px]">
        <ProductContainer products={products} />
      </div>
    </div>
  );
}
