import styled from 'styled-components';

import { IoMdCall } from "react-icons/io";

import { IoMdMail } from "react-icons/io";

import { MdLocationOn } from "react-icons/md";

import { TbDeviceLandlinePhone } from "react-icons/tb";

export const DivHerosBg = styled.div`
background-color:#B90124;
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`


export const HeadTitle = styled.h1`
color:#ffffff;
font-size:70px;
text-align:center;
margin-top:160px;
position: sticky;
top: 0;
z-index: 1000;
`

export const ImageLogo = styled.img`
height:400px;

`



export const UnorderList = styled.ul`
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  width:100%;
`


export const ParaDescription = styled.p`
 color:#ffffff;
 font-size:20px;
 font-family:roboto;
 text-align:center;
`



export const DivFormContainer = styled.div`
height:400px;
width:90%;
background-color:#00ffff;
border-radius:20px;
display:flex;

`

export const DivContactUSContainer = styled.div`
height:90%;
width:40%;
border-radius:20px;
background-color:#ffffff;
padding:20px;
`

export const HeadingContact = styled.h1`
font-family:roboto;
font-size:20px;
color:#000000;
`

export const IoMdCalls = styled(IoMdCall)`
height:20px;
width:20px;
`

export const DivDetailsContactUs = styled.div`
display :flex;
justify-content:space-between;
align-items:center;
width:320px;
`


export const IoMdMails = styled(IoMdMail)`
height:20px;
width:20px;
`

export const IoLocations = styled(MdLocationOn)`
height:40px;
width:40px;
`

export const DivDetailsContactUss = styled.div`
display :flex;
justify-content:space-between;
align-items:center;
width:140px;
`

export const TbDeviceLandlinePhones = styled(TbDeviceLandlinePhone)`

`

export const DivSchoolImg = styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
`

export const ImageLogoSchool = styled.img`
height:90px;
`


export const HeadingForm = styled.h1`
color:#000000;
font-size:20px;
font-family:roboto;

margin-left:250px;
`

export const DivFormRegister = styled.div`

`

export const Hr = styled.hr`
width:100px;
margin-right:10px;
color:#000000;
`


export const DivEleInput = styled.div`
`

export const InputELE = styled.input`
height:30px;
width:300px;
border-width:0px;
border-radius:3px;
background-color:#f5f3ed;
margin:10px;
outline:none;
`

export const ParaCounry = styled.p`
height:30px;
width:50px;
background-color:#f5f3ed;
display:flex;
justify-content:center;
align-items:center;
border-radius:3px;
margin-left:14px;
`

export const ButtonOtp = styled.button`
background-color:#000000;
color:#ffffff;
font-family:roboto;
font-size:14px;
height:30px;
width:150px;
border-width:0px;
border-radius:4px;
`

export const InputEleNumb = styled.input`
height:30px;
width:400px;
border-width:0px;
border-radius:3px;
background-color:#f5f3ed;
margin:10px;
outline:none;

`

export const DivOtpContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;

`

export const DivBtnEnterOtpContainer = styled.div`

`

export const InputEnterOtp = styled.input`
height:30px;
width:460px;
border-width:0px;
border-radius:3px;
background-color:#f5f3ed;
margin:10px;
outline:none;
`

export const ButtonVerify = styled.button`
background-color:#000000;
color:#ffffff;
font-family:roboto;
font-size:14px;
height:30px;
width:150px;
border-width:0px;
border-radius:4px;
`

export const InputEleClass = styled.input`
height:30px;
width:300px;
border-width:0px;
border-radius:3px;
background-color:#f5f3ed;
margin:10px;
outline:none;

`

export const DivCheckBoxContainer = styled.div`
display:flex;
margin-left:5px;
align-items:center;
`
export const LabelEleCheckBox = styled.label`
font-size:13px;
font-family:roboto;
`

export const ButtonEnqire = styled.button`
background-color:#000000;
color:#ffffff;
font-family:roboto;
font-size:14px;
height:30px;
width:150px;
border-width:0px;
border-radius:4px;
margin-left:250px;
margin-top:15px;
`

export const HeadingStudent = styled.h1`
color:#C9002B;
font-size:15px;
font-family:roboto;
margin-top:50px;
`

export const ParaDescriptionOftitle = styled.p`
font-family:roboto;
font-size:14px;
width:900px;
width:600px;
`

export const ImageBenifits = styled.img`
height:150px;
margin-top:20px;
`

export const DivLogoAndBenifitsContainer = styled.div`
display:flex;
align-items:center;
margin-top:60px;
`

export const HeadinfTitleTulas = styled.h1`
color:#171717;
font-size:30px;
font-family:'Poppins', sans-serif;
font-weight:bold;
margin-bottom:0px;

`
export const HeadingTulas = styled.h1`
color:#171717;
font-size:100px;
font-family:'Poppins', sans-serif;
font-weight:bold;
margin-top:0px;
margin-bottom:0px;
`

export const HeadingFuture = styled.h1`
color:#171717;
font-size:100px;
font-family:'Poppins', sans-serif;
font-weight:bold;
margin-top:0px;
margin-bottom:0px;
`

export const SpanEle = styled.span`
color: #980019;
font-family: "Playfair Display", serif;
font-style: italic;
font-weight: 700;
margin-top:0px;
margin-bottom:0px;
`

export const DivFututreTulas = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
`

export const ImageBenifitss = styled.img`
height:150px;
margin-top:30px;
margin-right:150px;
`

export const HeadTitleOfSport = styled.h1`
color:#980019;
font-size:45px;
font-family:display Serif;
text-align:center;
`

export const SportsDiv = styled.div`
margin-top:100px;
`

export const ParaSportDes = styled.p`
color:#000000;
font-size:30px;
font-family:display Serif;
text-align:center;
`

export const SpanSport1 = styled.span`
color:#980019;
font-size:30px;
font-family:display Serif;
font-weight:bold;
`

export const SpanSport2 = styled.span`
color:#980019;
font-size:30px;
font-family:display Serif;
font-weight:bold;
`

export const DivSlick = styled.div`
background-color:#419be0;
color:#000000;
padding: 40px;
margin:10px;
`




export const ImageSportLogo = styled.img`
height:220px;
margin:10px;
`

export const VideoPlayer = styled.video`
width:100%;
`

export const HeadOfVideo = styled.h1`
color:#980019;
font-size:35px;
font-family:display Serif;

`

export const ParaSchoolDes = styled.p`
font-size:14px;
width:480px;
`

export const ImageStudent = styled.img`
height:150px;
`

export const DivImageStudentSection = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`

export const ParaCrack = styled.p`
color:#8da1ab;
font-weight:800;
`

export const ImageBuilding = styled.img`
height:90px;
`

export const DivCampus = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:20px;
`

export const ParaNumber = styled.p`
font-size:30px;
margin-bottom:0px;
`

export const ImageStudentLogoEdu = styled.img`
height:250px;
`


export const DivEductionStudent = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

export const ImageStudentLogoEdus = styled.img`
height:250px;
width:400px;
`

export const DivSportBgContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

export const DivStudentSportsContainer = styled.div`
`

export const ImageBuildings = styled.img`
height:200px;
`

export const DivBgContainerRanking = styled.div`
background-color:#E6D5F7;
height:190px;
width:100%;
margin-top:10px;
display:flex;
justify-content:center;
align-items:center;
`

export const ImageRanking = styled.img`
height:150px;
margin-right:20px;
`

export const ImageArrow = styled.img`
height:40px;
`


export const DivRankingHash = styled.div`
background-color:#C9002B;
border-radius:5px;
width:160px;
height:130px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:7px;
`

export const HeadofHashTitle = styled.h1`
font-family:'Cormorant Garamond' , serif ;
margin-bottom:0px;
margin-top:0px;
color:#ffffff;
`


export const ParaCoEduction = styled.p`
font-size:10px;
margin-top:4px;
color:#ffffff;
`

export const HeadTitleDehradun = styled.h1`
margin-bottom:4px;
color:#ffffff;
font-size:19px;

`

export const DivBgContainerheadAndImg = styled.div`
display:flex;
`