"use client";
import Image from "next/image";
import { SearchManufacturer } from "./";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-2 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const router = useRouter();

  const [manufecturer, setManufecturer] = useState("");
  const [model, setModel] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufecturer === "" && model === "") {
      return alert("Please fill the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufecturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufecturer) {
      searchParams.set("manufecturer", manufecturer);
    } else {
      searchParams.delete("manufecturer");
    }

    const newPathName = `${
      window.location.pathname
    }? ${searchParams.toString()}`;

    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufecturer}
          setManufacturer={setManufecturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model-icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px]"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
