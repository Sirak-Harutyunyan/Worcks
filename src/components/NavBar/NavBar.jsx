import React, { useState } from 'react'
import './NavBar.css'
export default function NavBar() {
  const [nav, setNav] = useState(false)
  const HandleClick = ()=>{
    setNav(true)
  }
  const HandleClosed = ()=>{
    setNav(false)
  }
  return (
    <div className='NavBar'>
        {
          nav?<div className='navtitle'>
            <div className='nav'>
            <h1>LOGOTYPE</h1>
            <i className="bi bi-x-lg"
            onClick={HandleClosed}></i>
            </div>
            <ul>
            <li>Demos<i className="bi bi-chevron-down"></i></li><hr />
            <li className="drob_down">Post
            <i className="bi bi-chevron-down"></i>
            </li><hr />
            <li>Features<i className="bi bi-chevron-down"></i></li><hr />
            <li>Categories<i className="bi bi-chevron-down"></i></li><hr />
            <li>Shop<i className="bi bi-chevron-down"></i></li><hr />
            <li>Buy Now</li>
        </ul>
          </div>
          
          :<div className='title'>
          <i className="bi bi-list"
          onClick={HandleClick}
          ></i>
              <h1>LOGOTYPE</h1>
              <i className="bi bi-search"></i>
          </div>
        }
        <hr />
        <ul>
            <li>Demos<i className="bi bi-chevron-down"></i></li>
            <li className="drob_down">Post
            <i className="bi bi-chevron-down"></i>
            <div className='drob_btn'>
                <a>Post Header <i className="bi bi-chevron-right"></i></a><hr />
                <a>Post Layout <i className="bi bi-chevron-right"></i></a><hr />
                <a>Share Buttons <i className="bi bi-chevron-right"></i></a><hr />
                <a>Gallery Post <i className="bi bi-chevron-right"></i></a><hr />
                <a>Video Post <i className="bi bi-chevron-right"></i></a>
            </div>
            </li>
            <li>Features<i className="bi bi-chevron-down"></i></li>
            <li>Categories<i className="bi bi-chevron-down"></i></li>
            <li>Shop<i className="bi bi-chevron-down"></i></li>
            <li>Buy Now</li>
        </ul>
    <hr />
    </div>
  )
}
