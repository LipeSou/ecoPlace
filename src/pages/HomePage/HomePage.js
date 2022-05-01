import React from "react"
import CategoryList from "../../components/Home/CategoryList/CategoryList"
import Slider from "../../components/Home/Slider/Slider"
import InputSearch from "../../components/InputSearch/InputSearch"

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