import React, { useState, useMemo } from "react";
import styles from "./SearchBar.module.css";
import fakeDB from "../data/FakeData.js";
import SearchCard from "./SearchCard";

function Searchbar() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchingString, setSearchingString] = useState("");
  const filteredItems = useMemo(() => {
    return fakeDB.filter((item) => {
      return item.dishes.toLowerCase().includes(searchingString.toLowerCase());
    });
  }, [searchingString]);
  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setIsSearching(true);
      setSearchingString(e.target.value);
    } else {
      setIsSearching(false);
      setSearchingString("");
    }
  };
  return (
    <>
      <div className="relative">
        <div className={styles.mainContainer}>
          <div className={styles.container1}>
            <i color="#FF7E8B" size="20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <title>location-fill</title>
                <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
              </svg>
            </i>
            <input
              className={styles.inputSearchBar}
              placeholder="Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi"
            ></input>
            <i color="#4F4F4F" size="12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4F4F4F"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
              >
                <title>down-triangle</title>
                <path d="M20 5.42l-10 10-10-10h20z"></path>
              </svg>
            </i>
          </div>
          <div className={styles.division}></div>
          <div className={styles.container2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#828282"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
            >
              <title>Search</title>
              <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
            </svg>
            <input
              value={searchingString}
              onChange={handleSearch}
              className={styles.inputSearchBox}
              placeholder="Search for restaurant, cuisine or a dish"
            ></input>
          </div>
        </div>
        {isSearching && (
          <div className="flex flex-col gap-2 absolute right-0 h-[400px] w-[420px] bg-white rounded-lg z-10 overflow-auto visible  border border-[rgb(207, 207, 207)] shadow-[rgba(28, 28, 28, 0.08)] ">
            {filteredItems.map((val, index) => {
              return (
                <SearchCard key={index} name={val.name} rating={val.rating} />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Searchbar;
