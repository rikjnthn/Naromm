"use client";
import React, { useState } from "react";
import clsx from "clsx";

const ProductInformation = ({
  name,
  description,
}: ProductInformationPropsType) => {
  const [isMore, setIsMore] = useState<boolean>(false);

  return (
    <div className="px-5 max-md:p-5">
      <h1 className="text-primary-base text-xl font-bold md:text-2xl">
        {name}
      </h1>

      <div
        className={clsx(
          "product-description text-sm/8 tracking-wide md:text-base/8",
          {
            "line-clamp-6": !isMore,
          },
        )}
        dangerouslySetInnerHTML={{ __html: description ?? "" }}
      />
      <span
        onClick={() => setIsMore((prev) => !prev)}
        className="text-primary-base cursor-default font-semibold"
      >
        {isMore ? "less" : "more"}
      </span>
    </div>
  );
};

export default ProductInformation;

interface ProductInformationPropsType {
  name?: string;
  description?: string;
}
