import React from "react"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



import {
    FooterContainer, 
    SocialMedias,
    Atendimento,
    StyledIcons,
    StyledP,
    StyledText
} from "./styled"

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedias>
                <div>
                    <p>Siga nossas redes sociais:</p>
                </div>
                <StyledIcons>
                    <FacebookOutlinedIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                    <TwitterIcon/>
                </StyledIcons>
            </SocialMedias>
            <Atendimento>
                <StyledText>Central de atendimento:</StyledText> 
                <StyledP>4040-5555</StyledP>
                <StyledText>Atendimento 24h</StyledText>
            </Atendimento>
        </FooterContainer>
    )
}

export default Footer