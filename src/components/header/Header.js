import React from "react"


import logo from "../../assets/img/logo.svg"
import 
{ 
    StyledUl, 
    HeaderContainer,
    StyledLi, 
    StyledA,

} from "./styled"




const Header = () => {

    return (
        <HeaderContainer>
            <div>
                <img src={logo}/>
            </div>
            <StyledUl>
                <StyledLi> 
                    Categoria 
                    {/* <ArrowDropDownOutlinedIcon/> */}
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
                    {/* <PersonOutlineIcon/> */}
                    <StyledA href="#">Meu perfil</StyledA>
                </StyledLi>

                <StyledLi>
                    {/* <ShoppingCartOutlinedIcon/> */}
                    <StyledA href="#">Carrinho</StyledA>
                </StyledLi>
            </StyledUl>
        </HeaderContainer>
      );
    };
  

    export default Header