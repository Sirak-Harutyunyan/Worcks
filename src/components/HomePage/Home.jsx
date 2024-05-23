import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'

export default function Home() {
    const [style, setStyle] = useState([])
    useEffect(() => {
      fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then(res=>res.json())
      .then(res=>setStyle(res))
    }, [])
    
  return (
    <div className='Home'>
        {
            style.map((elem,index)=>{
                return(
                    <div key={index}>
                        <img src={elem.img}  />
                        <p>{elem.tags}</p>
                        <h2>{elem.title}</h2>
                        <div>
                          <h4>{elem.autor}</h4>
                          <h5>{elem.date}  {elem.views} Views</h5>
                        </div>
                        <h3>{elem.text}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}
