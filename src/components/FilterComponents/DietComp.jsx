import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import FoodCardComp from '../FoodCard/FoodCardComp'
import { useSelector } from 'react-redux'


const DietComp = () => {
    const [snackRecipe, setSnackRecipe] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Soup')
            .then((response)=> response.json())
            .then((data) => {
                setSnackRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Blueberry')
            .then((response)=> response.json())
            .then((data) => {
                setSnackRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Wrap')
            .then((response)=> response.json())
            .then((data) => {
                setSnackRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Coconut')
            .then((response)=> response.json())
            .then((data) => {
                setSnackRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Spanakopita')
            .then((response)=> response.json())
            .then((data) => {
                setSnackRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Greek')
            .then((response)=> response.json())
            .then((data) => {
                setSnackRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Saag')
            .then((response)=> response.json())
            .then((data) => {
                setSnackRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    const open = useSelector((state)=> state.ui.open)

    return (
        <Box sx={{ marginTop: 10, marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease", display: "flex", justifyContent: "space-evenly", alignItems: "Center", flexWrap:"wrap", marginBottom: 3, whiteSpace:"discard" }}>
            {
                snackRecipe.map(item => (
                    <FoodCardComp key={item.id} recipeDetails={item} />
                ))
            }
            
        </Box>
    )
}

export default DietComp
