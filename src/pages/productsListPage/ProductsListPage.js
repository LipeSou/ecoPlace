import React from "react"
import rightarrow from "../../assets/img/right-arrow.png"
import ArrowDropDownOutlined from '@material-ui/icons/ArrowDropDownOutlined';
import { 
    StyledText,
    StyledInput, 
    StyledPathInfo, 
    MainContainer,
    FilterTitle,
    FilterContainer,
    SelectContainer,
    SearchMainContainer,
    Products,
    ContainerMain
} from "./styled"
import { ProdutosDados } from "../../data";
import ProductCard from "../../components/productCard/ProductCard";

const productListPage = () => {


    return (
        <MainContainer>
            <div>
                <StyledInput/>
                <StyledPathInfo>
                    <StyledText> home </StyledText> <img src={rightarrow}/> <StyledText>  categoria </StyledText> <img src={rightarrow}/> <StyledText>  madeiramento </StyledText>
                </StyledPathInfo>
                <ContainerMain>
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
                            {
                                ProdutosDados.map(product => {
                                    console.log(product)
                                    return (
                                        <div key={product.code}>
                                            <ProductCard  product={product} listPage={true}/>
                                        </ div>
                                    )
                                })
                            }
                        </Products>
                    </SearchMainContainer>
                </ContainerMain>
            </div>
        </MainContainer>
    )
}

export default productListPage