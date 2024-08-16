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
      <h1 className="text-xl font-bold text-primary md:text-2xl">{name}</h1>

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
        className="cursor-default font-semibold text-primary"
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
