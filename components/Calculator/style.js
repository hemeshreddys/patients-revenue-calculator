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
      position:relative;
      height: 55px;
      margin-top: 25px;
      input[type=number]::-webkit-inner-spin-button {
        color:#003A6B;
        opacity: 0;
      }
      .inner-btns{
        .plus,
        .minus {
            position:absolute;
            width: 30px;
            border: none;
            height: 20px;
            outline: none;
            right:0;
            cursor:pointer;
        }
        .plus{
          background:url('../static/assets/uparrow.svg');
          background-repeat: no-repeat;
          top:0;
        }

        .minus{
            background: url('../static/assets/downarrow.svg');
            background-repeat: no-repeat;
            bottom:0;
        }

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
        background:transparent;
        font-family: 'Tahoma';
        font-weight: 700;
        width: 100px;
        color:${props => ( props.boxInputTextColor ? props.boxInputTextColor : '#ffffff')} ;
    } 
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
`