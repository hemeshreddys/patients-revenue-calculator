
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border: none;
    cursor:pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    margin: auto;
    padding: 19px 22px;
    transition: all 0.2s ease;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: linear-gradient(90deg,#75B9A6 0%,#3C8E78 100%);
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  & span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    padding: 15px 0;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  &:hover:before {
    width: 100%;
    background: linear-gradient(90deg,#D3A249 0%,#F1C172 100%);
    color:#ffffff;
  }
  &:focus{
    outline:none;
  }
  &:active {
    transform: scale(0.96);
  }
  `

export default Button