import React from 'react'
import Calculator from '../components/Calculator'
import Link from 'next/link'

const Page2 = () => {
    return(
        <>
            <Link href="/"><a><span className="home"></span>Back to Home</a></Link>
            <Calculator/>
        </>
    )
}

export default Page2