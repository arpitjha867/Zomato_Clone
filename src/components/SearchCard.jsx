import React from 'react'
import styles from './SearchBar.module.css'

function SearchCard(props) {
    const {key,name,rating} = props
  return (

          <div id={key} className='flex align-middle hover:bg-slate-100 p-2 rounded-lg cursor-pointer'>
            <div className='w-[25%]'>
            <img className=' h-[70px] w-[70px] rounded-md' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="search result"/>
            </div>
            <div className='w-[70%] flex flex-col justify-start gap-1'>
            <div style={{fontSize:"17px",color:"#1C1C1C",fontWeight:"500"}}>
                  {name}
              </div>
              <div style={{width:"40px",background:"#267E3E",alignContent:"center", display:'flex',color:"white",alignItems:"center",padding:"1px 2px 2px 2px",borderRadius:"5px"}}>
                <div style={{fontSize:"13px",fontWeight:"bold",marginRight:"2px"}}>
                 {rating}
                </div>
                <div>
                <i color="#FFFFFF"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10px" height="10px" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg></i>
                </div>
              </div>
            </div>
          </div>
          
  )
}

export default SearchCard
