import React from 'react'
import Calculator from '../components/Calculator'
import Link from 'next/link'
import {Background} from './globalStyles'
import Button from '../components/Button/Button'

const Page2 = () => {
    return(
        <Background backgroundColor={'#F4F4F4'}>
            {/* Calculator Component */}
            <Calculator/>
            {/* Link to Home page */}
            {/* Custom button with Nextjs Link */}
            <Button><Link href="/"><span>Back to Home</span></Link>  </Button>
        </Background>
    )
}

export default Page2