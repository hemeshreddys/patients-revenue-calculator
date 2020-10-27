import React from 'react'
import Data from "../data/data.json";
import Link from 'next/link'
import { Background } from './globalStyles'
import Button from '../components/Button/Button'

const Home = () => {
    return(
        <div className="main-container">
            <Background>
                {/* Data is read from the data.json file */}
                <h1>{Data.page1.title}</h1>
                <h3>{Data.page1.subTitle}</h3>
                <p>{Data.page1.desc}</p>
                {/* Custom button with Nextjs Link */}
                <Button><Link href="/page2"><span>View Calculator</span></Link>  </Button>
            </Background>
        </div>
    )
}

export default Home
