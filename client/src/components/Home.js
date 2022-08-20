import React from 'react'
import b from "./hompage.jpg";
import "../App.css"

const Home = () => {
  return (
    <div className='Box'>

   <img className='homeImg' src={b} alt="home" />
   <h1 className='centered'>Get The Best Product</h1>
    </div>
  )
}

export default Home;