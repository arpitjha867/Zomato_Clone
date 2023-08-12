import React, { useMemo, useState , useRef , useEffect} from "react";
import {cities} from '../data/cities.js'

function SearchModal({onClose}) {
    const [citiesData,setCityData] = useState(cities);
    const [query,setQuery] = useState("")
    const [selectedData,setSelectedData] = useState([]);
    const filteredItems = useMemo(() => { return  citiesData.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [citiesData,query]
  )


  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);
  return (
<div     ref={modalRef}
            style={{
              boxShadow: "rgba(28, 28, 28, 0.15) 0px 0.8rem 6.4rem",
              border: "0.05rem solid rgb(248, 248, 248)",
              borderRadius: "20%",
              background: "rgb(255, 255, 255)",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              borderRadius: "15px",
              height: "fit-content",
              width: "450px",
              padding:"0px 25px 10px 25px",
              top:"50px",
              left:"0px",
              cursor:"default"
            }}
          >
            <h3
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
                class="sc-1yzxt5f-9 fWzgjj"
                value={query}
                onChange={e => setQuery(e.target.value)}
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
            <div style={{maxHeight:"180px" ,overflowY: "auto", display: "flex", flexWrap: "wrap" ,marginBottom:"20px",marginTop:"10px"}}>
                      {
                        filteredItems.map((data,key)=>{
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
                              value={data}
                              // {...selectedData.includes(data) ? "checked" : ""}
                              type="checkbox"
                              aria-checked="false" 
                              style={{
                                width: "18px",
                                height: "18px",
                                background: "rgb(255, 255, 255)",
                                border: "2px solid rgb(156, 156, 156)",
                                marginRight:"10px"
                              }}
                              onChange={e =>{ 
                                console.log("The dish clicked is : ",e.target.value)
                                setSelectedData(e.target.value)
                              }
                            }
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
    
            <div class="sc-doWzTn iPHLe" style={{display:"flex",justifyContent:"end"}}>
              <button
                class="sc-1kx5g6g-1 jrAmIP sc-bNQFlB hWtIcc"
                role="button"
        
                aria-disabled="false"
                style={{height:"40px",borderRadius:"7px"}}
              >
                <span  class="sc-1kx5g6g-2 bdqfuS">
                  <span class="sc-1kx5g6g-3 dkwpEa">Clear all</span>
                </span>
              </button>
              <button
                class="sc-1kx5g6g-1 jrAmIP sc-dBaXSw ivivIc"
                role="button"
               
                aria-disabled="false"
                style={{height:"40px",background:"rgb(239, 79, 95)",borderRadius:"7px"}}
              >
                <span class="sc-1kx5g6g-2 iiMxKS">
                  <span class="sc-1kx5g6g-3 dkwpEa">Apply</span>
                </span>
              </button>
            </div>
          </div>
  )
}

export default SearchModal
