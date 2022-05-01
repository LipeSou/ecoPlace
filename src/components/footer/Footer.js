import React from "react"
import instagram from "../../assets/img/instagram.png"
import linkedin from "../../assets/img/linkedin.png"
import facebook from "../../assets/img/facebook.png"
import twitter from "../../assets/img/twitter.png"
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
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={linkedin}/>
                    <img src={twitter}/>
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