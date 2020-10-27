
import React from 'react'
import Link from 'next/link'
import { Background } from './globalStyles'
import Button from '../components/Button/Button'

const ErrorPage = () => {
    return(
        <div className="main-container">
            <Background>
                {/* Data is read from the data.json file */}
                <h1>Error 404.</h1><h3>Sorry, we couldn't find the page you were looking for.</h3>
                {/* Custom button with Nextjs Link */}
                <Button><Link href="/page2"><span>Back to Home</span></Link> </Button>
            </Background>
        </div>
    )
}

export default ErrorPage
