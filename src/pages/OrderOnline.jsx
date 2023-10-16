import React, { useEffect, useState, useMemo } from "react";
import CommonHeaderPages from "../components/CommonHeaderPages";
import styles from "./OrderOnline.module.css";
import SearchModal from "../components/SearchModal";
import FoodCard from "../components/FoodCard";
import fakeDB from "../data/FakeData.js";
import Footer from "../components/Footer";

function OrderOnline() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratingButton, setRatingButton] = useState(false);
  const [ratingQuery, setRatingQuery] = useState(0);
  const filteredItems = useMemo(() => {
    return fakeDB.filter((item) => item.rating >= ratingQuery);
  }, [ratingQuery]);
  const modalBtn = () => {
    console.log("modal open");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingButton = () => {
    if (ratingButton === false) {
      setRatingButton(true);
      setRatingQuery(4);
      console.log("Rating filtered Applied : ", filteredItems);
    } else {
      setRatingButton(false);
      setRatingQuery(0);
      console.log("Rating filtered Removed : ", filteredItems);
    }
  };

  function createFoodCardArray(fakeDB) {
    return fakeDB.map((card, index) => (
      <div key={index}>
        <FoodCard {...card} />
      </div>
    ));
  }

  useEffect(() => {
    // this is the image lazy loader functionality
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
      const lazyImageObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        }
      );

      lazyImages.forEach((lazyImage) => {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
  });
  return (
    <>
      <CommonHeaderPages />
      {/* filter options  */}
      <div className="h-fit w-75--lg px-[2px] m-auto">
        <div className="sticky top-0 bg-white  z-15 flex items-center w-[100%] mx-auto pt-15 pb-15">
          <div className={styles.filterBtns}>Filters</div>
          <div
            className={
              ratingButton
                ? styles.filterBtnsRatingButtonAfterClick
                : styles.filterBtns
            }
            onClick={handleRatingButton}
          >
            Rating:4.0+
          </div>
          <div
            style={{ display: "flex", gap: "4px", position: "relative" }}
            className={styles.filterBtns}
            onClick={modalBtn}
          >
            Cuisines
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9C9C9C"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
            >
              <title>chevron-down</title>
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
            {isModalOpen && <SearchModal onClose={handleCloseModal} />}
          </div>
        </div>

        <h1
          style={{
            fontWeight: "500",
            color: "#1C1C1C",
            width: "100%",
            margin: "auto",
            marginTop: "30px",
            fontSize: "30px",
          }}
        >
          Delivery Restaurants in Delhi NCR
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            margin: "auto",
            marginTop: "40px",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          {/* here i need to implement infineite scroll */}
          {/* <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<h4 className="loader">Loading...</h4>}
            useWindow={false}
          > */}
          {createFoodCardArray(filteredItems)}
          {/* </InfiniteScroll> */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OrderOnline;
