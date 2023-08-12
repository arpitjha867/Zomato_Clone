import React from 'react'
import styles from './FoodCard.module.css'

function FoodCard(props) {
  const {id,name , rating , dishes , avg_spend , delivery_time} = props;
  return (
    <>
      <div id={id} className={styles.foodCardHover} style={{display:"flex",flexDirection:"column",padding:"10px 10px 10px 10px" ,borderRadius:"20px",cursor:"pointer"}}>
            <img style={{height: "230px",width: "320px",borderRadius: "15px"}} src="https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg" alt="food" />
            <div style={{display:'flex',justifyContent:"space-between" ,marginTop:"7px",alignItems:"center"}} >
              <div style={{fontSize:"17px",color:"#1C1C1C",fontWeight:"500"}}>
                  {name}
              </div>
              <div style={{background:"#267E3E",alignContent:"center", display:'flex',color:"white",alignItems:"center",padding:"1px 2px 2px 2px",borderRadius:"5px"}}>
                <div style={{fontSize:"13px",fontWeight:"bold",marginRight:"2px"}}>
                {rating}
                </div>
                <div>
                <i class="sc-rbbb40-1 iFnyeo" color="#FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10px" height="10px" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fauQLv"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></i>
                </div>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:"space-between" ,marginTop:"8px"}}>
              <div style={{fontSize:"14px",color:"#696969"}}>
              {dishes}
              </div>
              <div style={{fontSize:"14px",color:"#696969"}}>
              &#8377;
                {avg_spend} for 2
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
              <p style={{fontWeight:"bold",fontSize:"12px",color:"#363636"}}>
              {delivery_time} mins
              </p>
            </div>
      </div>
    </>
  )
}

export default FoodCard
