import React, { useEffect, useState ,useMemo } from "react";
import CommonHeaderPages from "../components/CommonHeaderPages";
import styles from "./OrderOnline.module.css";
import SearchModal from "../components/SearchModal";
import FoodCard from "../components/FoodCard";
import InfiniteScroll from 'react-infinite-scroller';
import {fakeDB} from '../data/FakeData.js'

function OrderOnline() {
  const [fakeDBData, setFakeDBData] = useState(fakeDB);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratingButton , setRatingButton] = useState(false);
  const [ratingQuery , setRatingQuery] = useState(0);
  const filteredItems = useMemo(() => { return  fakeDB.filter(item =>item.rating >= ratingQuery)
}, [fakeDB,ratingQuery]
)
  const modalBtn = () => {
  console.log('modal open')
  setIsModalOpen(true)
  
}
const handleCloseModal = () => {
  setIsModalOpen(false);
};


const handleRatingButton = () => {
  if(ratingButton == false){
    setRatingButton(true);
    setRatingQuery(4);
    console.log("Rating filtered Applied : ",filteredItems);
  }else{
    setRatingButton(false);
    setRatingQuery(0);
    console.log("Rating filtered Removed : ",filteredItems);
  }

}

function createFoodCardArray(fakeDB) {
  return fakeDB.map((card, index) => (
    <div key={index}>
      <FoodCard {...card} />
    </div>
  ));
}

useEffect(()=>{
  console.log(isModalOpen);
})

const itemsPerPage = 3;
const [hasMore, setHasMore] = useState(true);
const [records, setrecords] = useState(itemsPerPage);
const loadMore = () => {
  if (records === fakeDB.length) {
    setHasMore(false);
  } else {
    setTimeout(() => {
      setrecords(records + itemsPerPage);
    }, 2000);
  }
};


  return (
    <>
      <CommonHeaderPages />
      {/* filter options  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "75%",
          margin: "auto",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <div className={styles.filterBtns}>Filters</div>
        <div className={ratingButton ? styles.filterBtnsRatingButtonAfterClick : styles.filterBtns} onClick={handleRatingButton}>Rating:4.0+</div>
        <div
          style={{ display: "flex", gap: "4px" ,position:"relative" }}
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

          {
            isModalOpen &&  <SearchModal onClose={handleCloseModal}/>
          }
          
        </div>
      </div>
      
        <h1 style={{fontWeight:"500",color:"#1C1C1C",width:"75%",margin:"auto",marginTop:"30px"}}>Delivery Restaurants in Delhi NCR</h1>
        <div style={{display:"flex",flexWrap:"wrap",width:"75%",margin:"auto",marginTop:"40px",justifyContent:"space-between",gap:"30px"}}>
          {/* <FoodCard name={'The best restraunt'} rating={4.5} dishes={'North indian , chinese , punjabi'} avg_spend={400} delivery_time={38}/> */}
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
    
    </>
  );
}

export default OrderOnline;
