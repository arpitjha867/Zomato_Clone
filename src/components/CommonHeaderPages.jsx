import React from 'react'
import styles from './CommonHeaderPages.module.css'
import Searchbar from './Searchbar'
import { useNavigate } from 'react-router-dom'

function CommonHeaderPages() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  }
  return (
    <div style={{display:"flex",flexDirection:"column",width:"75%",margin:"auto", paddingTop:"10px"}}>
      <div style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex"}}>
      <p onClick={goToHome} style={{cursor:"pointer",fontStyle:"italic",fontSize:"40px",fontWeight:"bolder",margin:"0px 20px 0px 0px"}}>Tomato</p>
        <Searchbar/>  
        </div>
        <div style={{display:"flex"}}>
            <div className={styles.buttonsOrderOn}>Log in</div>
            <div className={styles.buttonsOrderOn}>Sign up</div>
        </div>
      </div>
      <div style={{display:"flex",marginTop:"20px"}}>
        <div style={{display:"flex", alignItems:"center",padding:"15px"}}>
            <div style={{borderRadius:"50%", background:"#FCEEC0", padding:"10px" }}>
                <img style={{width:"30px",height:"30px"}} alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" loading="lazy" class="sc-s1isp7-5 jQwYOW"></img>
            </div>
            <div className={styles.optionsBtnsOrder}>
                  Delivery
            </div>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
            <div style={{borderRadius:"50%" , background:"#F8F8F8" ,padding:"10px"}}>
              <img style={{width:"30px",height:"30px"}} alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" loading="lazy" class="sc-s1isp7-5 jQwYOW"></img>
            </div>
              <div className={styles.optionsBtnsOrder}>
                  Dining out
              </div>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
            <div style={{borderRadius:"50%", background:"#F8F8F8" , padding:"10px"}}>
            <img style={{width:"30px",height:"30px"}} alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" loading="lazy" class="sc-s1isp7-5 jQwYOW"></img>
            </div>
            <div className={styles.optionsBtnsOrder}>
              Nightlife
            </div>
        </div>
      </div>
    </div>
  )
}

export default CommonHeaderPages
