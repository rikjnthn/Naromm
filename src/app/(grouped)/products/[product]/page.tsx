import Image from "next/image";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";

import ProductsRecommendation from "@/components/products-recommendation";
import ProductInformation from "@/components/product-information";
import AddToCart from "@/components/add-to-cart";
import ProductOverviewHeader from "@/components/product-overview-header";
import { ProductType } from "@/interface";

export const dynamicParams = false;

async function getProducts(productName: string) {
  try {
    const data = await readFile(
      process.cwd() + "/src/data/json/products.json",
      "utf-8",
    );

    const products = JSON.parse(data).products as ProductType[];
    const product = products.find((product) => product.name === productName);

    if (!product) {
      throw new Error("Not Found");
    }

    const description = await readFile(
      process.cwd() + "/src/data/" + product?.descriptionFileName,
      "utf-8",
    );

    /**
     * Firstly, it filter the products list from search product. Then add
     * "sort" field with random generated number. Then sort the items with
     * "sort" field to make shuffled like array. Then remove the "sort" field
     * and take the first 4 items.
     */
    const productRecommendation = products
      .filter((product) => product.name !== productName)
      .map((product) => {
        return {
          product,
          sort: Math.random(),
        };
      })
      .sort((a, b) => a?.sort - b?.sort)
      .map(({ product }) => product)
      .slice(0, 4);

    return {
      productInformation: {
        ...product,
        description,
      },
      productRecommendation,
    };
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  const data = await readFile(
    process.cwd() + "/src/data/json/products.json",
    "utf-8",
  );

  const products = JSON.parse(data).products as ProductType[];

  return products.map(({ name }) => ({
    product: name.replaceAll(" ", "-"),
  }));
}

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const productName = decodeURIComponent(params.product.replaceAll("-", " "));

  const { productRecommendation, productInformation } =
    await getProducts(productName);

  return (
    <div className="lg:mx-auto lg:max-w-7xl">
      <ProductOverviewHeader />

      <div className="mt-14 md:mt-32 md:flex md:justify-between md:px-14 lg:px-24">
        <div className="flex h-80 md:max-w-97 lg:max-w-103">
          <Image
            className="mx-auto h-full w-auto object-cover md:rounded-md"
            src={productInformation.imageSrc}
            alt={productInformation.name}
            width={430}
            height={400}
            priority
          />
        </div>

        <div className="md:max-w-100">
          <ProductInformation
            description={productInformation.description}
            name={productInformation.name}
          />
          <AddToCart {...productInformation} />
        </div>
      </div>

      <ProductsRecommendation products={productRecommendation} />
    </div>
  );
}
