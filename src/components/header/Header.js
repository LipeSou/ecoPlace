import React from "react"
import ArrowDropDownOutlined from '@material-ui/icons/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutlined';


import logo from "../../assets/img/logo.svg"
import 
{
    StyledUl, 
    HeaderContainer,
    StyledLi, 
    StyledA,
    LogoContainer,
} from "./styled"




const Header = () => {

    return (
        <HeaderContainer>


            <LogoContainer>
                <img src={logo}/>
            </LogoContainer>

            <StyledUl>
                <StyledLi> 
                    Categoria 
                    <ArrowDropDownOutlined/>
                </StyledLi>
                
                <StyledLi>
                    <StyledA href="#"> Torne-se Vendedor </StyledA>
                </StyledLi>

                <StyledLi>
                    <StyledA href="#"> Ajuda</StyledA>
                </StyledLi>

                <StyledLi>
                    {/* <InventoryStyled/> */}
                    <StyledA href="#">Meus pedidos</StyledA>
                </StyledLi>

                <StyledLi>
                    <PersonOutlineIcon/>
                    <StyledA href="#">Meu perfil</StyledA>
                </StyledLi>

                <StyledLi>
                    <ShoppingCartOutlinedIcon/>
                    <StyledA href="#">Carrinho</StyledA>
                </StyledLi>
            </StyledUl>
        </HeaderContainer>
      );
    };
  

    export default Header