import React from "react"
import InputSearch from "../components/InputSearch/InputSearch"
import Slider from "../components/Home/Slider/Slider"
import CategoryList from "../components/Home/CategoryList/CategoryList"

const Home = () => {
    
    return (
        <>
            <InputSearch />
            <Slider />
            <CategoryList />
        </>
    )
}

export default Home