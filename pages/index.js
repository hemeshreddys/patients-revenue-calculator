import React from 'react'
import Calculator from '../components/Calculator'
import Data from "../data/data.json";
import Link from 'next/link'
import {Background} from './globalStyles'

const Home = () => {
    return(
        <div className="main-container">
            <Background>
                <h1>{Data.page1.title}</h1>
                <h3>{Data.page1.subTitle}</h3>
                <p>{Data.page1.desc}</p>
                <Link href="/page2"><a className="white"><span className="calc"></span>View the Calculator</a></Link>              
            </Background>
        </div>
    )
}

export default Home
