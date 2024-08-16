"use client";
import React from "react";

import SearchIcon from "../search-icon";
import { CategoryType, SetStateType } from "@/interface";
import CategoryInput from "../category-input";

const SearchBar = ({
  category,
  search,
  setCategory,
  setSearch,
}: SearchBarPropsType) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 gap-y-8 px-5 py-[30px] lg:px-[30px]">
      <form className="flex min-w-20 rounded-full border border-primary px-4 py-1">
        <input
          onChange={(e) => setSearch(e.currentTarget.value.trim())}
          className="w-full bg-transparent"
          type="text"
          placeholder="Search"
          value={search}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>

      <CategoryInput category={category} setCategory={setCategory} />
    </div>
  );
};

export default SearchBar;

interface SearchBarPropsType {
  category: CategoryType;
  search: string;
  setCategory: SetStateType<CategoryType>;
  setSearch: SetStateType<string>;
}
