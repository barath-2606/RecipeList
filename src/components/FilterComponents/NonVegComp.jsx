import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import FoodCardComp from "../FoodCard/FoodCardComp"
import { useEffect, useState } from "react"

const NonVegComp = () => {
    const [nonVegRecipe, setNonVegRecipe] = useState([])
    const open = useSelector((state)=> state.ui.open)

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/tag/Chicken')
        .then((response) => response.json())
        .then((data)=>{
            setNonVegRecipe((pervState)=>([...pervState,  ...data.recipes.filter((newRecipe) => 
                !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
              ),]))
        })
        .catch((error)=>{console.warn(error)})
    }, [])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/tag/Beef')
        .then((response) => response.json())
        .then((data)=>{
            setNonVegRecipe((pervState)=>([...pervState,  ...data.recipes.filter((newRecipe) => 
                !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
              ),]))
        })
        .catch((error)=>{console.warn(error)})
    }, [])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/tag/Curry')
        .then((response) => response.json())
        .then((data)=>{
            setNonVegRecipe((pervState)=>([...pervState, ...data.recipes.filter((newRecipe) => 
                !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
              ),]))
        })
        .catch((error)=>{console.warn(error)})
    }, [])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/tag/Butter chicken')
        .then((response) => response.json())
        .then((data)=>{
            setNonVegRecipe((pervState)=>([...pervState, ...data.recipes.filter((newRecipe) => 
                !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
              ),]))
        })
        .catch((error)=>{console.warn(error)})
    }, [])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/tag/Grilling')
        .then((response) => response.json())
        .then((data)=>{
            setNonVegRecipe((pervState)=>([...pervState, ...data.recipes.filter((newRecipe) => 
                !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
              ),]))
        })
        .catch((error)=>{console.warn(error)})
    }, [])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/tag/Sushi rolls')
        .then((response) => response.json())
        .then((data)=>{
            setNonVegRecipe((pervState)=>([...pervState, ...data.recipes.filter((newRecipe) => 
                !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
              ),]))
        })
        .catch((error)=>{console.warn(error)})
    }, [])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/tag/Shrimp curry')
        .then((response) => response.json())
        .then((data)=>{
            setNonVegRecipe((pervState)=>([...pervState, ...data.recipes.filter((newRecipe) => 
                !pervState.some((existingRecipe) => existingRecipe.id === newRecipe.id)
              ),]))
        })
        .catch((error)=>{console.warn(error)})
    }, [])

  return (
    <Box>
      <Box sx={{ marginTop: 10, marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease", display: "flex", justifyContent: "space-evenly", alignItems: "Center", flexWrap:"wrap", marginBottom: 3, whiteSpace:"discard" }}>
            {
                nonVegRecipe.map(item => (
                    <FoodCardComp key={item.id} recipeDetails={item} />
                ))
            }
        </Box>
    </Box>
  )
}

export default NonVegComp
