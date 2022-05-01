import React from "react"
import CategoryList from "../../components/home/CategoryList/CategoryList"
import Slider from "../../components/home/Slider/Slider"
import InputSearch from "../../components/inputSearch/InputSearch"
import {InputContainer} from "./styled"

const HomePage = () => {
    
    return (
        <>  <InputContainer>
                <InputSearch />
            </InputContainer>
            <Slider />
            <CategoryList />
        </>
    )
}

export default HomePage