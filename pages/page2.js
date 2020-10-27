import React from 'react'
import Calculator from '../components/Calculator'
import Link from 'next/link'
import {Background} from './globalStyles'

const Page2 = () => {
    return(
            <Background backgroundColor={'#F4F4F4'}>
                <Calculator/>
                <Link href="/"><a className="black"><span className="home"></span>Back to Home</a></Link>
            </Background>
    )
}

export default Page2