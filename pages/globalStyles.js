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
    width: 100%;
    @media (min-width: 600px) {
        font-size: 1em;
        width: 50%;
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

    animation-name: fadeOutAnim;
    animation-duration: 1s;
    position:absolute;
    @keyframes fadeOutAnim {
      from {left:-100px}
      to {left:0}
    }

    @media (min-width: 600px) {
        padding: 150px; 
    }
`