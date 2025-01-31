import { Box, } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GradeIcon from '@mui/icons-material/Grade';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Dialog, DialogTitle, DialogContent } from "@mui/material"
import { Button, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function FoodCardComp({ recipeDetails }) {

    const [open, setOpen] = useState(false)

    const handleOpenClose = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ transition: 'margin 0.3s ease' }}>
            <Card sx={{ width: 300, marginTop: 2, borderRadius: 2 }}>
                <CardMedia component="img" height="234" image={recipeDetails.image} alt="Paella dish" />
                <CardContent sx={{ backgroundColor: '#3B6790', p: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography color="white">{recipeDetails.name}</Typography>
                        <Chip
                            label={recipeDetails.difficulty}
                            color={
                                recipeDetails.difficulty === 'Easy'
                                    ? 'success'
                                    : recipeDetails.difficulty === 'Medium'
                                        ? 'warning'
                                        : 'error'
                            }
                            size="small"
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', my: '10px' }}>
                        <Chip
                            icon={<AccessTimeIcon sx={{ fill: 'white' }} fontSize="small" />}
                            label={`${recipeDetails.prepTimeMinutes + recipeDetails.cookTimeMinutes} Mins`}
                            sx={{ color: 'white', backgroundColor: '#23486A', width: '100px' }}
                            size="small"
                        />
                        <Chip
                            icon={<GradeIcon sx={{ fill: 'white' }} fontSize="small" />}
                            label={`${recipeDetails.rating}`}
                            sx={{ color: 'white', backgroundColor: '#23486A', width: '60px' }}
                            size="small"
                        />
                        <Chip
                            icon={<PersonIcon sx={{ fill: 'white' }} fontSize="small" />}
                            label={`${recipeDetails.servings}`}
                            sx={{ color: 'white', backgroundColor: '#23486A', width: '60px' }}
                            size="small"
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', my: '10px' }}>
                        <Chip
                            icon={<LocationOnIcon sx={{ fill: 'white' }} fontSize="small" />}
                            label={`${recipeDetails.cuisine}`}
                            sx={{ color: 'white', backgroundColor: '#23486A', width: '100px' }}
                            size="small"
                        />
                        <Chip label={`Calories: ${recipeDetails.caloriesPerServing}`} sx={{ color: 'white', backgroundColor: '#23486A', width: '100px' }} size="small" />
                    </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#3B6790', padding: '0px 5px' }} disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ fill: 'white' }} />
                    </IconButton>
                    <Button variant="contained" size="small" sx={{ backgroundColor: '#EFB036' }} onClick={handleOpenClose} disableElevation>
                        View
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={open} >
                <DialogTitle >{recipeDetails.name}</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleOpenClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-evenly", flexWrap:"wrap"}}>
                    <img src={recipeDetails.image} height={180} width={180}></img>
                    <Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontWeight:"bold"}}>Preparation Time : </Typography><Typography> {recipeDetails.prepTimeMinutes + recipeDetails.cookTimeMinutes} Mins </Typography>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontWeight:"bold"}}>Calories : </Typography><Typography> {recipeDetails.caloriesPerServing} </Typography>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontWeight:"bold"}}>Cuisine : </Typography><Typography> {recipeDetails.cuisine} </Typography>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontWeight:"bold"}}>Difficulty : </Typography><Typography> {recipeDetails.difficulty} </Typography>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontWeight:"bold"}}>Servings : </Typography><Typography> {recipeDetails.servings} </Typography>
                        </Box>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{fontWeight:"bold"}}>Meal Type : </Typography><Typography> {recipeDetails.mealType[0]} </Typography>
                        </Box>
                    </Box>
                    </Box>
                    <Typography sx={{fontWeight:"bold", marginY:1}} variant='h6'>Ingredients</Typography>
                    {recipeDetails.ingredients.map((item)=>(
                        <Chip key={item.id} label={item} sx={{ color: 'white', backgroundColor: 'green', marginRight:1, marginY:1}} size="small" />
                    ))}
                    
                    <Typography sx={{fontWeight:"bold", marginY:1}} variant='h6'>Instructions</Typography>
                    
                    {recipeDetails.instructions.map((item)=>(
                        <Typography sx={{backgroundColor:"white", color:"black", marginY:1, borderRadius:2, padding:"3px"}} key={item.id}>{item}</Typography>
                    ))}
                </DialogContent>
            </Dialog>
        </Box>
    );
}

FoodCardComp.propTypes = {
    recipeDetails: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        instructions: PropTypes.arrayOf(PropTypes.string),
        prepTimeMinutes: PropTypes.number,
        cookTimeMinutes: PropTypes.number,
        servings: PropTypes.number,
        difficulty: PropTypes.string,
        cuisine: PropTypes.string,
        caloriesPerServing: PropTypes.number,
        tags: PropTypes.arrayOf(PropTypes.string),
        userId: PropTypes.number,
        image: PropTypes.string,
        rating: PropTypes.number,
        reviewCount: PropTypes.number,
        mealType: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};
