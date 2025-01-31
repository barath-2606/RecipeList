import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import FoodCardComp from '../FoodCard/FoodCardComp'
import { useSelector } from 'react-redux'

const VegetarianComp = () => {
    const [vegRecipe, setVegRecipe] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Vegetarian')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Rice')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Potatoes')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Pesto pasta')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Banana')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Dosa')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Pasta')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Pizza')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Roti')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Couscous salad')
            .then((response)=> response.json())
            .then((data) => {
                setVegRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    const open = useSelector((state)=> state.ui.open)

    return (
        <Box sx={{ marginTop: 10, marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease", display: "flex", justifyContent: "space-evenly", alignItems: "Center", flexWrap:"wrap", marginBottom: 3, whiteSpace:"discard" }}>
            {
                vegRecipe.map(item => (
                    <FoodCardComp key={item.id} recipeDetails={item} />
                ))
            }
        </Box>
    )
}

export default VegetarianComp
