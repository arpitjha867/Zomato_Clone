import React from "react";
import CommonHeaderPages from "../components/CommonHeaderPages";
import styles from "./OrderOnline.module.css";
import LiveSearchCities from "../components/LiveSearchCities";


function OrderOnline() {
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
            class="sc-rbbb40-0 iwHbVQ"
          >
            <title>chevron-down</title>
            <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
          </svg>
      <div
        class="sc-cmIlrE rXScg"
        style={{
          boxShadow: "rgba(28, 28, 28, 0.15) 0px 0.8rem 6.4rem",
          border: "0.05rem solid rgb(248, 248, 248)",
          borderRadius: "20%",
          background: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          borderRadius: "15px",
          height: "380px",
          width: "450px",
          padding:"0px 25px 10px 25px",
          top:"50px",
          left:"0px"
        }}
      >
        <h3
          class="sc-1sv4741-0 sc-ekkqgF jRfQpv"
          style={{ fontSize: "24px", fontWeight: "500" }}
        >
          Cuisines
        </h3>
        <div
          style={{
            display: "flex",
            border: "1px solid rgb(232, 232, 232)",
            height: "40px",
            alignItems: "center",
            justifyContent: "space-between",
            padding:"7px 10px 7px 10px",
            borderRadius:"5px"
          }}
        >
          <div style={{display:"flex", alignItems:"center" ,gap:"5px"}}>
          <div class="sc-1yzxt5f-1 evkmel" style={{ cursor: "pointer" }}>
            <i class="sc-rbbb40-1 iFnyeo" size="17" color="#B5B5B5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#B5B5B5"
                width="17"
                height="17"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 fajqkJ"
              >
                <title>Search</title>
                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
              </svg>
            </i>
          </div>
          <input
            placeholder="Search here"
            type="text"
            width="100%"
            autocomplete="on"
            class="sc-1yzxt5f-9 fWzgjj"
            value=""
            style={{ border: "none", outline: "none", height: "30px" ,fontSize:"18px" ,    color: 'rgb(28, 28, 28)' }}
          ></input>

          </div>
          <div class="sc-1yzxt5f-0 gDbTSR" style={{ cursor: "pointer" }}>
            <i
              class="sc-rbbb40-1 iFnyeo sc-eqPNPO cjtIHA"
              size="17"
              color="#B5B5B5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#B5B5B5"
                width="17"
                height="17"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 fajqkJ"
              >
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </i>
          </div>
        </div>
        <LiveSearchCities/>

        <div class="sc-doWzTn iPHLe" style={{display:"flex",justifyContent:"end"}}>
          <button
            class="sc-1kx5g6g-1 jrAmIP sc-bNQFlB hWtIcc"
            role="button"
            tabindex="0"
            aria-disabled="false"
            style={{height:"40px",borderRadius:"7px"}}
          >
            <span tabindex="-1" class="sc-1kx5g6g-2 bdqfuS">
              <span class="sc-1kx5g6g-3 dkwpEa">Clear all</span>
            </span>
          </button>
          <button
            class="sc-1kx5g6g-1 jrAmIP sc-dBaXSw ivivIc"
            role="button"
            tabindex="0"
            aria-disabled="false"
            style={{height:"40px",background:"rgb(239, 79, 95)",borderRadius:"7px"}}
          >
            <span tabindex="-1" class="sc-1kx5g6g-2 iiMxKS">
              <span class="sc-1kx5g6g-3 dkwpEa">Apply</span>
            </span>
          </button>
        </div>
      </div>
        </div>
      </div>
      {/* dish search modal */}
    </>
  );
}

export default OrderOnline;
