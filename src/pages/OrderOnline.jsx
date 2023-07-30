import React, { useEffect, useState } from "react";
import CommonHeaderPages from "../components/CommonHeaderPages";
import styles from "./OrderOnline.module.css";
import SearchModal from "../components/SearchModal";
import FoodCard from "../components/FoodCard";
import {foodCardData} from "../data/FakeData";


function OrderOnline() {
  const [isModalOpen, setIsModalOpen] = useState(false);


const modalBtn = () => {
  console.log('modal open')
  setIsModalOpen(true)

}
const handleCloseModal = () => {
  setIsModalOpen(false);
};

useEffect(()=>{
  console.log(isModalOpen)
})
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
        <div className={styles.filterBtns}>Rating:</div>
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
        <div style={{display:"flex",width:"75%",margin:"auto",marginTop:"40px"}}>
          <FoodCard name={'The best restraunt'} rating={4.5} dishes={'North indian , chinese , punjabi'} avg_spend={400} delivery_time={38}/>
        </div>
    
    </>
  );
}

export default OrderOnline;
