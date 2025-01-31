import { Box, Divider, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import FoodCardComp from "../FoodCard/FoodCardComp"
import { useEffect, useState } from "react"

const RegionComp = () => {
    const [indianRecipe, setIndianRecipe] = useState([])
    const [pakistaniRecipe, setPakistaniRecipe] = useState([])
    const [asianRecipe, setAsianRecipe] = useState([])
    const [mexicanRecipe, setMexicanRecipe] = useState([])
    const [thaiRecipe, setThaiRecipe] = useState([])
    const [russianRecipe, setRussianRecipe] = useState([])
    const [brazilRecipe, setBrazilRecipe] = useState([])
    const open = useSelector((state) => state.ui.open)

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Indian')
            .then((response) => response.json())
            .then((data) => {
                setIndianRecipe((pervState) => ([...pervState, ...data.recipes.filter((newRecipe) =>
                    !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                ),]))
            })
            .catch((error) => { console.warn(error) })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Pakistani')
            .then((response) => response.json())
            .then((data) => {
                setPakistaniRecipe((pervState) => ([...pervState, ...data.recipes.filter((newRecipe) =>
                    !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                ),]))
            })
            .catch((error) => { console.warn(error) })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Asian')
            .then((response) => response.json())
            .then((data) => {
                setAsianRecipe((pervState) => ([...pervState, ...data.recipes.filter((newRecipe) =>
                    !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                ),]))
            })
            .catch((error) => { console.warn(error) })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Russian')
            .then((response) => response.json())
            .then((data) => {
                setRussianRecipe((pervState) => ([...pervState, ...data.recipes.filter((newRecipe) =>
                    !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                ),]))
            })
            .catch((error) => { console.warn(error) })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Thai')
            .then((response) => response.json())
            .then((data) => {
                setThaiRecipe((pervState) => ([...pervState, ...data.recipes.filter((newRecipe) =>
                    !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                ),]))
            })
            .catch((error) => { console.warn(error) })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Brazilian')
            .then((response) => response.json())
            .then((data) => {
                setBrazilRecipe((pervState) => ([...pervState, ...data.recipes.filter((newRecipe) =>
                    !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                ),]))
            })
            .catch((error) => { console.warn(error) })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Mexican')
            .then((response) => response.json())
            .then((data) => {
                setMexicanRecipe((pervState) => ([...pervState, ...data.recipes.filter((newRecipe) =>
                    !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                ),]))
            })
            .catch((error) => { console.warn(error) })
    }, [])

    return (

        <Box sx={{ marginTop: 10, marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease" }}>
            <Divider textAlign="center"><Typography sx={{ color: "blue" }} variant='h5'>Indian Recipes</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace: "discard", flexWrap: "wrap" }}>

                {
                    indianRecipe.map(item => (
                        <FoodCardComp key={item.id} recipeDetails={item} />
                    ))
                }

            </Box>
            <Divider textAlign="center"><Typography sx={{ color: "red" }} variant='h5'>Pakistani Recipes</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace: "discard", flexWrap: "wrap" }}>

                {
                    pakistaniRecipe.map(item => (
                        <FoodCardComp key={item.id} recipeDetails={item} />
                    ))
                }

            </Box>
            <Divider textAlign="center"><Typography sx={{ color: "green" }} variant='h5'>Brazil Recipes</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace: "discard", flexWrap: "wrap" }}>

                {
                    brazilRecipe.map(item => (
                        <FoodCardComp key={item.id} recipeDetails={item} />
                    ))
                }

            </Box>
            <Divider textAlign="center"><Typography sx={{ color: "green" }} variant='h5'>Russian Recipes</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace: "discard", flexWrap: "wrap" }}>

                {
                    russianRecipe.map(item => (
                        <FoodCardComp key={item.id} recipeDetails={item} />
                    ))
                }

            </Box>
            <Divider textAlign="center"><Typography sx={{ color: "green" }} variant='h5'>Asian Recipes</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace: "discard", flexWrap: "wrap" }}>

                {
                    asianRecipe.map(item => (
                        <FoodCardComp key={item.id} recipeDetails={item} />
                    ))
                }

            </Box>
            <Divider textAlign="center"><Typography sx={{ color: "green" }} variant='h5'>Mexican Recipes</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace: "discard", flexWrap: "wrap" }}>

                {
                    mexicanRecipe.map(item => (
                        <FoodCardComp key={item.id} recipeDetails={item} />
                    ))
                }

            </Box>

            <Divider textAlign="center"><Typography sx={{ color: "green" }} variant='h5'>Thai Recipes</Typography></Divider>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "Center", marginBottom: 3, whiteSpace: "discard", flexWrap: "wrap" }}>

                {
                    thaiRecipe.map(item => (
                        <FoodCardComp key={item.id} recipeDetails={item} />
                    ))
                }

            </Box>
        </Box>

    )
}

export default RegionComp
