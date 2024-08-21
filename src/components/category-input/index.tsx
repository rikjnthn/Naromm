"use client";
import React, { useRef, useState } from "react";
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

  const categoryRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="cursor-default select-none">
      <button
        type="button"
        title={`Category ${category}`}
        onClick={() => setIsOpenOption((prev) => !prev)}
        ref={categoryRef}
        className="flex w-32 items-center justify-between rounded-md border border-primary-base px-2 py-1 hover:bg-zinc-400 hover:bg-opacity-30 active:bg-zinc-600 active:bg-opacity-30"
      >
        <div className="text-sm">{category}</div>

        <div className={clsx({ "rotate-180": !isOpenOption })}>
          <ArrowIcon />
        </div>
      </button>

      <div
        className={clsx(
          "w-32 overflow-clip rounded-md bg-page text-sm shadow-md",
          isOpenOption ? "absolute" : "hidden",
        )}
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
                className="hover:bg-zinc-400 hover:bg-opacity-30 active:bg-zinc-600 active:bg-opacity-30"
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
