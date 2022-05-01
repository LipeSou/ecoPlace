import React from "react"
import rightarrow from "../../assets/img/right-arrow.png"
import ArrowDropDownOutlined from '@material-ui/icons/ArrowDropDownOutlined';
import { 
    StyledText,
    StyledInput, 
    StyledPathInfo, 
    MainContainer,
    StyledsearchInfo,
    FilterTitle,
    FilterContainer,
    SelectContainer,
    SearchMainContainer,
    Products
} from "./styled"

const productListPage = () => {
    return (
        <MainContainer>
            <div>
                <StyledInput/>
                <StyledPathInfo>
                    <StyledText> home </StyledText> <img src={rightarrow}/> <StyledText> Busca por: Madeiramento </StyledText>
                </StyledPathInfo>
                <StyledsearchInfo> Você pesquisou por: testando </StyledsearchInfo>
                <SearchMainContainer>
                    <FilterContainer>
                        <FilterTitle>Filtros</FilterTitle>
                        <SelectContainer>
                            <p>Ordenar por</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Ofertas</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Fretes Gratis</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Avaliações</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                        <SelectContainer>
                            <p>Selos</p>
                            <ArrowDropDownOutlined style={{color:'white'}}/>
                        </SelectContainer>
                    </FilterContainer>

                    <Products>
                        
                    </Products>


                </SearchMainContainer>
            </div>
        </MainContainer>
    )
}

export default productListPage