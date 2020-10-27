import styled,{
    createGlobalStyle,
    ThemeProvider
}  from 'styled-components'


const GlobalStyle = createGlobalStyle `

body {
    margin: 0;
    background: #F4F4F4;
    font-family: 'Tahoma';
    @font-face {
        font-family: 'Tahoma';
        src: url('../static/fonts/Tahoma-Bold.woff2') format('woff2'),
            url('../static/fonts/Tahoma-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
}

* {
    box-sizing: border-box;
}
.home,
.calc {
    display: block;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
}

.home {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-home' width='100' height='100' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23F44336' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='5 12 3 12 12 3 21 12 19 12' /%3E%3Cpath d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' /%3E%3Cpath d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' /%3E%3C/svg%3E");
}

.calc {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-calculator' width='100' height='100' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23F44336' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Crect x='4' y='3' width='16' height='18' rx='2' /%3E%3Crect x='8' y='7' width='8' height='3' rx='1' /%3E%3Cline x1='8' y1='14' x2='8' y2='14.01' /%3E%3Cline x1='12' y1='14' x2='12' y2='14.01' /%3E%3Cline x1='16' y1='14' x2='16' y2='14.01' /%3E%3Cline x1='8' y1='17' x2='8' y2='17.01' /%3E%3Cline x1='12' y1='17' x2='12' y2='17.01' /%3E%3Cline x1='16' y1='17' x2='16' y2='17.01' /%3E%3C/svg%3E");
}

.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('../static/assets/doct.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    color: #ffffff;
    background-color: #ffffff;

}

h1 {
    font-size: 2em;
    @media (min-width: 600px) {
        font-size: 4em;
    }
}
h2 {
    font-size: 2em;
    @media (min-width: 600px) {
        font-size: 2em;
    }
}
h3 {
    font-size: 1em;
    @media (min-width: 600px) {
        font-size: 2em;
    }
}
p {
    font-size: 0.8em;
    @media (min-width: 600px) {
        font-size: 1em;
    }
}

a {
    max-width: 300px;
    text-decoration: none;
    &.white{
        color: #ffffff;
    }
    &.black{
        color: #000000;
    }
}

`

export default GlobalStyle


export const Background = styled.div`
    width: 100vw;
    background:  ${props => ( props.backgroundColor ? props.backgroundColor : "#0000007a")};;
    padding: 35px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 600px) {
        padding: 150px; 
    }
`