import React from "react"
import CategoryList from "../../components/home/CategoryList/CategoryList"
import Slider from "../../components/home/Slider/Slider"
import InputSearch from "../../components/inputSearch/InputSearch"

const HomePage = () => {
    
    return (
        <>
            <InputSearch />
            <Slider />
            <CategoryList />
        </>
    )
}

export default HomePage