import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {  Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Images
import Veg from "/Images/Veg.png";
import NonVeg from "/Images/NonVeg.png";
import Diet from "/Images/Diet.png";
import Snacks from "/Images/Snacks.png";
import Region from "/Images/Region.png";
import Home from "/Images/Home.png";
import Search from "/Images/find.png"
// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { setOpen } from "../../slice/CreateSlice.jsx";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open ? openedMixin(theme) : closedMixin(theme)),
        "& .MuiDrawer-paper": open ? openedMixin(theme) : closedMixin(theme),
    })
);

export default function Navbar({ open }) {
    const theme = useTheme();
    const navigate = useNavigate();
    // const [recipeOptions, setRecipeOptions] = useState([]);
    const dispatch = useDispatch()
    // const [searchTerm, setSearchTerm] = useState('')

    // const handleAutoComplete = (e) => {
    //     setSearchTerm(e.target.value)
    // }

    const handleDrawerOpen = () => {
        dispatch(setOpen(!open))
    };
    // const handleDrawerClose = () => setOpen(false);

    const handleBtnClick = (text) => {
        if(text=="Home"){
            const routePath = `/`;
            navigate(routePath);
        }else{
            const routePath = `/${text.toLowerCase().replace(" ", "-")}`;
            navigate(routePath);
        }
        
        
    };

    // const handleSearchBtn = () => {
    //     console.info(searchTerm)
    // }

    // useEffect(() => {
    //     fetch("https://dummyjson.com/recipes")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // Store both id and name
    //             setRecipeOptions(data.recipes.map((item) => ({ id: item.id, name: item.name })));
    //             console.info("Data fetched:", data.recipes);
    //         })
    //         .catch((error) => console.error("Error fetching recipes:", error));
    // }, []);


    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={0}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Left Section: Drawer Toggle & Title */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton color="inherit" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 2, ...(open && { display: "none" }) }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            RecipeNest
                        </Typography>
                    </Box>

                    {/* Right Section: Search & Button */}
                    {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Autocomplete
                            freeSolo
                            options={recipeOptions}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField {...params} placeholder="Search Recipe..." variant="outlined" />}
                            sx={{ width: 180, marginRight: 1, backgroundColor: "white", borderRadius: 1 }}
                            size="small"
                            onChange={handleAutoComplete}
                        />
                        <Button sx={{ backgroundColor: "green", color: "white" }} size="small" onClick={handleSearchBtn}>
                            Search
                        </Button>
                    </Box> */}
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerOpen}>
                        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    {["Home", "Search", "Vegetarian", "Non-Vegetarian", "Snacks", "Diets", "Region"].map((text) => (
                        <ListItem key={text} disablePadding sx={{ display: "block" }}>
                            <ListItemButton sx={{ minHeight: 48, px: 2.5, my: 3, justifyContent: open ? "initial" : "center" }} onClick={() => handleBtnClick(text)}>
                                <ListItemIcon sx={{ minWidth: 0, justifyContent: "center", mr: open ? 3 : "auto" }}>
                                    {text === "Vegetarian" ? <Avatar src={Veg} /> :
                                        text === "Non-Vegetarian" ? <Avatar src={NonVeg} /> :
                                            text === "Snacks" ? <Avatar src={Snacks} /> :
                                                text === "Diets" ? <Avatar src={Diet} /> :
                                                    text === "Home" ? <Avatar src={Home} /> :
                                                        text === "Search" ? <Avatar src={Search} /> :
                                                            <Avatar src={Region} />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

Navbar.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};
