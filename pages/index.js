import React from 'react'
import Calculator from '../components/Calculator'
import Data from "../data/data.json";
import Link from 'next/link'

const Home = () => {
    return(
        <div className="main-container">
           <div className="home-page-content">
              <h1>{Data.page1.title}</h1>
              <h2>{Data.page1.subTitle}</h2>
              <p>{Data.page1.desc}</p>
              <Link href="/page2"><a><span className="calc"></span>View the Calculator</a></Link>
           </div>
        </div>
    )
}

export default Home
