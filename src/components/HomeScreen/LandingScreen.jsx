// import React from 'react'

import FoodCardComp from '../FoodCard/FoodCardComp'
import { Box, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

export default function LandingScreen() {
    const [vegFoods, setVegFoods] = useState([])
    const [noVegFoods, setNonVegFoods] = useState([])
    const [commonFoods, setCommonFoods] = useState([])

    const open = useSelector((state) => state.ui.open); 

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Vegetarian?limt=4')
            .then((response) => response.json())
            .then((data) => {
                setVegFoods(data.recipes)
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Indian?limit=4')
            .then((response) => response.json())
            .then((data) => {
                setNonVegFoods(data.recipes)
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes?limit=4')
            .then((response) => response.json())
            .then((data) => {
                setCommonFoods(data.recipes)
            })
    }, [])
    return (
        <Box sx={{ marginTop: 10, marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease" }}>
            <Divider textAlign="center"><Typography sx={{ color: "blue" }} variant='h5'>Top Foods Today</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace:"discard", flexWrap:"wrap" }}>

                {commonFoods.map(item => (
                    <FoodCardComp key={item.id} recipeDetails={item} />
                ))}

            </Box>
            <Divider textAlign="center"><Typography sx={{ color: "red" }} variant='h5'>Top Non-Veg Foods Today</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, flexWrap:"wrap" }}>

                {noVegFoods.map(item => (
                    <FoodCardComp key={item.id} recipeDetails={item} />
                ))}

            </Box>
            <Divider textAlign="center"><Typography sx={{ color: "green" }} variant='h5'>Top Veg Foods Today</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, flexWrap:"wrap" }}>

                {vegFoods.map(item => (
                    <FoodCardComp key={item.id} recipeDetails={item} />
                ))}

            </Box>
        </Box>
    );
}
