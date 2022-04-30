import React from "react"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import InventoryIcon from '@material-ui/icons/InventoryIcon';
// import InventoryIcon from '@material-ui/icons/bo';
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
                    <ArrowDropDownIcon/>
                </StyledLi>
                
                <StyledLi>
                    <StyledA href="#"> Torne-se Vendedor </StyledA>
                </StyledLi>

                <StyledLi>
                    <StyledA href="#"> Ajuda</StyledA>
                </StyledLi>

                <StyledLi>
                    {/* <InventoryIcon/> */}
                    <StyledA href="#">Meus pedidos</StyledA>
                </StyledLi>

                <StyledLi>
                    <PersonOutlinedIcon/>
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