import { SchoolImgLogo, HeaderBgContainer, ParaHeader,DIVParaContainer } from './styledComponents'

const Header = () => {
    return (
        <HeaderBgContainer>
            <SchoolImgLogo src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" />
            <DIVParaContainer>
                <ParaHeader>ABOUT TIS</ParaHeader>
                <ParaHeader>ACADEMICS</ParaHeader>
                <ParaHeader>BOARDING LIFE</ParaHeader>
                <ParaHeader>BEYOND ACADEMICS</ParaHeader>
                <ParaHeader>EVENTS</ParaHeader>
                <ParaHeader>ADMISSION</ParaHeader>
                <ParaHeader>MANDATORY DISCLOSURE</ParaHeader>
                <ParaHeader>ALUMINI NETWORK</ParaHeader>
                <ParaHeader>QUICK LINKS</ParaHeader>

            </DIVParaContainer>

        </HeaderBgContainer>
    )
}


export default Header