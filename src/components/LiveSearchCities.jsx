import React from 'react'
import {cities} from '../data/cities.js'

function LiveSearchCities() {
  return (
<div style={{ overflowY: "auto", display: "flex", flexWrap: "wrap" ,marginBottom:"20px",marginTop:"10px"}}>
                  {
                    cities.map((data,key)=>{
                      const data1 = <div  style={{ flexBasis: "50%" ,margin:"10px 0px 10px 0px"}} key={key}>
                      <label
                        style={{
                          fontSize: "16px",
                          color: "#1C1C1C",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          aria-checked="false" 
                          style={{
                            width: "18px",
                            height: "18px",
                            background: "rgb(255, 255, 255)",
                            border: "2px solid rgb(156, 156, 156)",
                            marginRight:"10px"
                          }}
                        />
                        {data}
                      </label>
                    </div>
                      return (
                        data1
                      )
                    })
                  }

                </div>
  )
}

export default LiveSearchCities
