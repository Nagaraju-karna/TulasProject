import { DivHerosBg, DivBgContainerheadAndImg, HeadTitleDehradun, HeadofHashTitle, ParaCoEduction, ImageArrow, DivRankingHash, DivBgContainerRanking, ImageRanking, DivSportBgContainer, ImageBuildings, DivStudentSportsContainer, DivEductionStudent, ImageStudentLogoEdus, DivCampus, ParaNumber, ImageStudentLogoEdu, DivImageStudentSection, ImageBuilding, ParaCrack, HeadOfVideo, ImageStudent, ParaSchoolDes, VideoPlayer, ImageSportLogo, DivSlick, SportsDiv, DivFututreTulas, SpanSport1, SpanSport2, HeadTitleOfSport, ImageBenifitss, HeadinfTitleTulas, SpanEle, HeadingFuture, HeadingTulas, DivLogoAndBenifitsContainer, ImageBenifits, ParaSportDes, HeadTitle, ParaDescriptionOftitle, ButtonEnqire, LabelEleCheckBox, InputEnterOtp, DivCheckBoxContainer, HeadingStudent, InputEleClass, ButtonVerify, DivOtpContainer, DivBtnEnterOtpContainer, InputEleNumb, ButtonOtp, ParaCounry, InputELE, Hr, DivEleInput, DivDetailsContactUss, DivDetailsContactUs, ImageLogo, IoMdMails, IoMdCalls, UnorderList, HeadingContact, DivContactUSContainer, ParaDescription, DivFormContainer, IoLocations, TbDeviceLandlinePhones, ImageLogoSchool, DivSchoolImg, HeadingForm, DivFormRegister } from './styledComponents'


import ReactPlayer from 'react-player'

import Slider from 'react-slick'



import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../Header'

const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true
}

const imgLogo = [
    {
        id: 1,
        imgUrl: "https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp"

    },

    {
        id: 2,
        imgUrl: "https://tis.edu.in/_next/static/media/polo.973ddbae.webp"

    },
    {
        id: 3,
        imgUrl: "https://tis.edu.in/_next/static/media/Image%203.21dc9e69.webp"
    },
    {
        id: 4,
        imgUrl: "https://tis.edu.in/_next/static/media/karate.4020fba5.webp"
    },
    {
        id: 5,
        imgUrl: "https://tis.edu.in/_next/static/media/swimming.6fc81e65.webp"
    },

    {
        id: 6,
        imgUrl: "https://tis.edu.in/_next/static/media/Image%201.0a814859.webp"
    },
    {
        id: 7,
        imgUrl: "https://tis.edu.in/_next/static/media/pot.6f7c2ee3.webp"
    },
    {
        id: 8,
        imgUrl: "https://tis.edu.in/_next/static/media/dance.88843edb.webp"
    }


]

const sportsList = [
    {
        id: 1,
        imgUrl: "https://tis.edu.in/_next/static/media/archery.7a805345.png"

    },
    {
        id: 2,
        imgUrl: "https://tis.edu.in/_next/static/media/cycling.80dbb9b1.png"

    },
    {
        id: 3,
        imgUrl: "https://tis.edu.in/_next/static/media/hockey.219fe552.png"

    },
    {
        id: 4,
        imgUrl: "https://tis.edu.in/_next/static/media/swimming.d4285534.png"

    },
    {
        id: 5,
        imgUrl: "https://tis.edu.in/_next/static/media/taekwando.86e26406.png"

    },

    {
        id: 7,
        imgUrl: "https://tis.edu.in/_next/static/media/football.ca61e5d0.png"

    },
    {
        id: 8,
        imgUrl: "https://tis.edu.in/_next/static/media/horseRiding.8f259127.png"

    },
]

const videos = "https://assets.tulas.edu.in/Desktop_TIS.mp4"

const HeroSection = () => {
    return (
        <>

            <Header />
            <DivHerosBg>
                <HeadTitle>LET'S DO it<br />With Tulas</HeadTitle>

                <UnorderList>
                    {imgLogo.map(each => (
                        <ImageLogo src={each.imgUrl} />
                    ))}
                </UnorderList>

                <ParaDescription>Tulas International Search was established in 2012 under the  aegis of Rishabh Educational<br />Trust to import education through seamless opportunities.</ParaDescription>

                <DivFormContainer>
                    <DivContactUSContainer>
                        <HeadingContact>Contact Us.</HeadingContact>
                        <DivDetailsContactUs>
                            <IoMdCalls />
                            <p>Admission HelpLine No. +91-98379 83791</p>
                        </DivDetailsContactUs>

                        <DivDetailsContactUss>
                            <IoMdMails />
                            <p>info@tis.edu.in</p>
                        </DivDetailsContactUss>

                        <DivDetailsContactUs>
                            <IoLocations />
                            <p>Tulas International School Dhoolkot P.O-Selaqui,Chakrata Road, Dehradun-248011 (Uttarakhand)</p>
                        </DivDetailsContactUs>

                        <DivDetailsContactUs>
                            <TbDeviceLandlinePhones />
                            <p>LandLine No. 0135-2699444, 0135-2699666</p>
                        </DivDetailsContactUs>
                        <DivSchoolImg>
                            <ImageLogoSchool src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" />
                        </DivSchoolImg>

                    </DivContactUSContainer>
                    <DivFormRegister>
                        <HeadingForm>Enquire Now!</HeadingForm>


                        <DivEleInput>
                            <InputELE type="text" placeholder='Enter your Full Name' />
                            <InputELE type="text" placeholder='Enter Email Id (Optional)' />

                        </DivEleInput>
                        <DivOtpContainer>
                            <ParaCounry>+91</ParaCounry>
                            <InputEleNumb type="text" />
                            <ButtonOtp>Send OTP</ButtonOtp>
                        </DivOtpContainer>
                        <DivBtnEnterOtpContainer>
                            <InputEnterOtp type="text" placeholder="Enter OTP" />
                            <ButtonVerify>Verify OTP</ButtonVerify>
                        </DivBtnEnterOtpContainer>
                        <DivEleInput>
                            <InputEleClass type="text" placeholder='Select Class' />
                            <InputEleClass type="text" placeholder='Select State' />

                        </DivEleInput>
                        <DivCheckBoxContainer>
                            <div>
                                <input type="checkbox" />
                            </div>

                            <LabelEleCheckBox>I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun</LabelEleCheckBox>

                        </DivCheckBoxContainer>
                        <ButtonEnqire>Enquire Now</ButtonEnqire>
                    </DivFormRegister>


                </DivFormContainer>
            </DivHerosBg >
            <DivLogoAndBenifitsContainer>
                <div>
                    <HeadingStudent>"We feel supported in what we do and nudged further to do more"</HeadingStudent>
                    <ParaDescriptionOftitle>At Tulas, we belive in bringing out the best in every student-whether it's academics, music, art, or drama. with the right support and inspiration, creativity find its way. For us, school isn't just about lessons, it's about endless opportunities waiting to be explored</ParaDescriptionOftitle>
                </div>

                <ImageBenifits src="https://tis.edu.in/_next/static/media/ladyInPink.c358aa8f.png" />
            </DivLogoAndBenifitsContainer>
            <DivFututreTulas>

                <div>
                    <HeadinfTitleTulas>TULA'S IS...</HeadinfTitleTulas>
                    <HeadingTulas>MADE FOR</HeadingTulas>
                    <HeadingFuture>THE<SpanEle> future</SpanEle></HeadingFuture>
                </div>
                <DivLogoAndBenifitsContainer>
                    <ImageBenifitss src="https://tis.edu.in/_next/static/media/manInBlue.46316cbf.png" />
                    <div>
                        <HeadingStudent>"Tulas helped me thrive and become the best version of myself"</HeadingStudent>
                        <ParaDescriptionOftitle>When you choose a school that choose you. it beacuse more than just a place to learn-it beacause a place th belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life</ParaDescriptionOftitle>
                    </div>
                </DivLogoAndBenifitsContainer>
            </DivFututreTulas>
            <SportsDiv>
                <HeadTitleOfSport>Sports?</HeadTitleOfSport>
                <ParaSportDes>It's not just a <SpanSport1>facility</SpanSport1>. At Tulas it's the <SpanSport2>foundation!</SpanSport2><br />16+ sports curated to bring joy and discipline to your life.</ParaSportDes>
            </SportsDiv>

            <DivSlick>

                <Slider {...settings}>
                    {sportsList.map(each => (
                        <ImageSportLogo key={each.id} src={each.imgUrl} />
                    ))}
                </Slider>
            </DivSlick>

            <div>
                <VideoPlayer src={videos} />
                <DivImageStudentSection>
                    <div>
                        <ImageStudent src="https://tis.edu.in/_next/static/media/AtTIS.59351600.png" />
                    </div>
                    <div>
                        <HeadOfVideo>At Tulas, we always ask, "What's the secret<br />to making school awesome"</HeadOfVideo>
                        <ParaSchoolDes>The secret to making one's school experience truly unforgettable? It's all about maling learning feel like an adventure-Where curiosity leads, creativity thrives, and every day bring something new to discover. when students are inspired, they don't just learn-they grow, explore, and shape their own futures.</ParaSchoolDes>
                        <ParaCrack>There, we cracked it!</ParaCrack>
                        <hr />
                    </div>
                </DivImageStudentSection>


            </div>
            <DivStudentSportsContainer>
                <DivEductionStudent>
                    <DivCampus>
                        <ImageBuilding src="https://tis.edu.in/_next/static/media/campus.e67b1a0a.png" />
                        <ParaNumber>22</ParaNumber>
                        <p>ACRE POLUTION FREE CAMPUS</p>
                    </DivCampus>
                    <DivCampus>
                        <ImageBuilding src="https://tis.edu.in/_next/static/media/sports.e695b690.png" />
                        <ParaNumber>16+</ParaNumber>
                        <p>OLYMIC SPORTS</p>
                    </DivCampus>
                    <ImageStudentLogoEdu src="https://tis.edu.in/_next/static/media/image3.b8273b93.png" />
                    <DivCampus>
                        <ImageBuilding src="https://tis.edu.in/_next/static/media/medical.e87071fe.png" />
                        <ParaNumber>24*4</ParaNumber>
                        <p>MEDICAL ASSISTANCE</p>
                    </DivCampus>
                </DivEductionStudent>
                <DivSportBgContainer>
                    <ImageStudentLogoEdus src="https://tis.edu.in/_next/static/media/image2.5d908b38.webp" />
                    <DivCampus>
                        <ImageBuilding src="https://tis.edu.in/_next/static/media/medical.e87071fe.png" />
                        <ParaNumber>24*4</ParaNumber>
                        <p>MEDICAL ASSISTANCE</p>
                    </DivCampus>
                    <ImageBuildings src="https://tis.edu.in/_next/static/media/image1.a3011dda.png" />
                </DivSportBgContainer>
                <DivBgContainerRanking>
                    <ImageRanking src="https://tis.edu.in/_next/static/media/ranking.157c5a68.png" />
                    <ImageArrow src="https://tis.edu.in/_next/static/media/see-all-activities.c481082d.png" />
                    <DivRankingHash>
                        <HeadofHashTitle>#1</HeadofHashTitle>
                        <HeadTitleDehradun>In Dehradun</HeadTitleDehradun>
                        <ParaCoEduction>Co-Eductional Boarding<br />School in Dehradum by<br />Eduction Today</ParaCoEduction>
                    </DivRankingHash>
                    <DivBgContainerheadAndImg>
                        <DivRankingHash>
                            <HeadofHashTitle>#2</HeadofHashTitle>
                            <HeadTitleDehradun>In Dehradun</HeadTitleDehradun>
                            <ParaCoEduction>Co-Eductional Boarding<br />School in Dehradum by<br />Eduction Today</ParaCoEduction>
                        </DivRankingHash>
                        <DivRankingHash>
                            <HeadofHashTitle>#3</HeadofHashTitle>
                            <HeadTitleDehradun>In Dehradun</HeadTitleDehradun>
                            <ParaCoEduction>Co-Eductional Boarding<br />School in Dehradum by<br />Eduction Today</ParaCoEduction>
                        </DivRankingHash>
                        <DivRankingHash>
                            <HeadofHashTitle>#4</HeadofHashTitle>
                            <HeadTitleDehradun>In Dehradun</HeadTitleDehradun>
                            <ParaCoEduction>Co-Eductional Boarding<br />School in Dehradum by<br />Eduction Today</ParaCoEduction>
                        </DivRankingHash>
                    </DivBgContainerheadAndImg>
                </DivBgContainerRanking>
            </DivStudentSportsContainer>



        </>
    )
}

export default HeroSection

