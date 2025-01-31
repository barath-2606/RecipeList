import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import FoodCardComp from '../FoodCard/FoodCardComp'
import { useSelector } from 'react-redux'

const SnacksComp = () => {
    const [snackRecipe, setSnaceRecipe] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Banana')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Mango')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Cookies')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Pizza')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Pineapple')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Blueberry')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Matcha ice cream')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Brigadeiros')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Salsa')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Coconut')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Wrap')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Smoothie')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Quinoa')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Patatas bravas')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
                    !prevState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
                  ),]))
            })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tag/Spring rolls')
            .then((response)=> response.json())
            .then((data) => {
                setSnaceRecipe((prevState)=>([...prevState,  ...data.recipes.filter((newRecipe) => 
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

export default SnacksComp
