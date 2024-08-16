"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { CategoryType, SetStateType } from "@/interface";
import ArrowIcon from "../arrow-icon";

const categoryOptions = [
  "All",
  "Moisturizer",
  "Serum",
  "Sunscreen",
  "Cleanser",
] as const;

const CategoryInput = ({ category, setCategory }: CategoryInputPropsType) => {
  const [isOpenOption, setIsOpenOption] = useState<boolean>(false);

  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // if (categoryRef.current?.hasChildNodes) {
      //   setIsOpenOption(false);
      // }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpenOption]);

  return (
    <div>
      <div
        onClick={() => setIsOpenOption(true)}
        ref={categoryRef}
        className="flex w-32 cursor-default items-center justify-between rounded-md border border-primary px-2 py-1"
      >
        <div className="text-sm">{category}</div>

        <div className="rotate-180">
          <ArrowIcon />
        </div>
      </div>

      <div
        className={clsx("absolute w-32 rounded-md bg-page text-sm shadow-md", {
          hidden: !isOpenOption,
        })}
      >
        <ul className="category-option">
          {categoryOptions.map((option) => {
            if (option === category) return null;

            return (
              <li
                onClick={() => {
                  setIsOpenOption(false);
                  setCategory(option);
                }}
                key={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryInput;

interface CategoryInputPropsType {
  category: CategoryType;
  setCategory: SetStateType<CategoryType>;
}
