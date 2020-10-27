import Styled from 'styled-components'

export const RectangleBox = Styled.div `
    height: 120px;
    width: 90%;
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
    @media (min-width: 600px) {
        width: 218px;
        margin: 0 5px;
        height: 179px;
    }
    input:focus, textarea:focus, select:focus{
        outline: none;
        
    }
    input[type=number]::-webkit-inner-spin-button {
        opacity: 1;
        border:1px solid red;
        width:100px;
    }
    input {
        font-size: 30px;
        background:transparent;
        font-family: 'Tahoma';
        font-weight: 700;
        color:${props => ( props.boxTextColor ? props.boxTextColor : '#ffffff')} ;
    }
    input:focus {
    outline:none;
}
.number-wrapper {
  position: relative;
  border:1px solid red;
}

.number-wrapper:after,
.number-wrapper:before {
  position: absolute;
  right: 5px;
  width: 1.6em;
  height: .9em;
  font-size: 10px;
  pointer-events: none;
  background: #fff;
  border:1px solid red;
}

.number-wrapper:after {
  color: blue;
  content: "\25B2";
  margin-top: 1px;
  border:1px solid red;
}

.number-wrapper:before {
  color: red;
  content: "\25BC";
  margin-bottom: 5px;
  border:1px solid red;
  bottom: -.5em;
}

/* background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='27px' height='16px' viewBox='0 0 27 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg id='Artboard' transform='translate(-418.000000, -108.000000)' stroke='%23539F8A' stroke-width='6'%3E%3Cpolyline id='Path' points='421 121 431.5 111 442 121'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
`

export const Container = Styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center; 
    width:100vw;
    margin: 0 auto;
    flex-direction:column;
    @media (min-width: 600px) {
        flex-direction:row;
        width:70vw;
    }
    /* display:grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem,1fr)); */
`