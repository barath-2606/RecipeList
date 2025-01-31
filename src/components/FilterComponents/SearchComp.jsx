import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import FoodCardComp from "../FoodCard/FoodCardComp";
import { useSelector } from 'react-redux'

const SearchComp = () => {
    const [recipeOptions, setRecipeOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null);
    const [searchedRecipe, setSearchRecipe] = useState(null)

    const open = useSelector((state)=> state.ui.open)

    const handleAutoComplete = (e, newValue) => {
        setSearchTerm(newValue ? newValue : '')
        if(searchTerm == ""){
            setSearchRecipe(null)
        }
    }

    const handleSearchBtn = () => {
        fetch("https://dummyjson.com/recipes/"+searchTerm.id)
        .then((response)=>response.json())
        .then((data)=>{
            setSearchRecipe(data)
        })
        .catch((error)=>console.warn(error))
    };

    const GetRecipeMethod = () => {
        fetch("https://dummyjson.com/recipes")
            .then((response) => response.json())
            .then((data) => {
                setRecipeOptions(data.recipes.map((item) => ({ id: item.id, name: item.name })));
                console.info("Data fetched:", data.recipes);
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    }

    useEffect(() => {
        GetRecipeMethod()
    }, []);

    return (
        <Box>
            <Box sx={{ marginTop: 10,marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease", display: "flex", justifyContent: "left", alignItems: "center", flexWrap: "wrap", marginBottom: 3 }}>
                <Autocomplete
                    freeSolo
                    options={recipeOptions}
                    getOptionLabel={(option) => option.name}
                    onChange={handleAutoComplete}
                    renderInput={(params) => (
                        <TextField {...params} placeholder="Search Recipe..." variant="outlined" />
                    )}
                    sx={{ width: 180, marginRight: 1, backgroundColor: "white", borderRadius: 1, border: "1px solid black" }}
                    size="small"
                />
                <Button sx={{ backgroundColor: "green", color: "white" }} size="small" onClick={handleSearchBtn}>
                    Search
                </Button>
            </Box>
            <Box sx={{ marginTop: 1, marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease"}}>
                {searchTerm && <Box sx={{ color: "black", display:"flex" }}>Searching for <Typography sx={{fontWeight:"bold", marginLeft:"7px"}}>{searchTerm.name}</Typography></Box>}
            </Box>
            <Box sx={{ marginTop: 1, marginLeft: open ? "250px" : "80px", transition: "margin 0.3s ease"}}>
                {searchedRecipe && <FoodCardComp recipeDetails={searchedRecipe} />}
            </Box>
        </Box>
    );
};

export default SearchComp;
