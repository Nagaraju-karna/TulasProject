import styled from 'styled-components'

import { IoMdCall } from "react-icons/io";

export const DivAdmissionBg = styled.nav`
height:30px;
background-color:#60BAB1;
display:flex;
justify-content:center;
align-items:center;

position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`

export const IoCalls = styled(IoMdCall)`
height:30px;

`

export const HeadPara = styled.p`
font-size:20px;
font-family:'Montserrat', sans-serif;
margin-left:10px;
margin-right:10px;
`

export const ButtonBtnNow = styled.button`
background-color:#000000;
border-radius:15px;
border-width:0px;
color:#ffffff;
font-family:roboto;
height:25px;
width:140px;
font-size:13px;

`