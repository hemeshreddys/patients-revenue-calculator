import Styled from 'styled-components'

export const RectangleBox = Styled.div `
    height: 150px;
    width: 80%;
    border-radius: 19px;
    background: ${props => ( props.boxBGColor ? props.boxBGColor : props.boxLinearColor ? props.boxLinearColor  : '#000000')} ;
    color: ${props => ( props.boxTextColor ? props.boxTextColor : '#ffffff')} ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    flex-grow: ${props => ( props.boxSize ? props.boxSize : 1)};
    margin: 5px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 22px;
    @media (min-width: 1024px) {
        width: 218px;
        margin: 0 5px;
        height: 179px;
    }
    .dynamic-field{
      input[type=number]::-webkit-inner-spin-button {
        color:#003A6B;
        opacity: 1;
      }
    }
    input:focus, textarea:focus, select:focus{
        outline: none;
        border:none;
        
    }

    input {
        border-color: transparent;
        font-size: 2em;
        text-align: left;
        margin-top:20px;
        background:transparent;
        font-family: 'Tahoma';
        font-weight: 700;
        width: 80px;
        color:${props => ( props.boxInputTextColor ? props.boxInputTextColor : '#ffffff')} ;
    }
    input:focus {
    outline:none;
}

/* background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='27px' height='16px' viewBox='0 0 27 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg id='Artboard' transform='translate(-418.000000, -108.000000)' stroke='%23539F8A' stroke-width='6'%3E%3Cpolyline id='Path' points='421 121 431.5 111 442 121'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
`

export const Container = Styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center; 
    width:100vw;
    margin: 10% auto;
    flex-direction:column;
    @media (min-width: 1024px) {
        flex-direction:row;
        width:70vw;
    }
    /* display:grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem,1fr)); */
`