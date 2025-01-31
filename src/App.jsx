import { Provider, useSelector, useDispatch } from "react-redux";
import { Store } from "./store/Store.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Vegetarian from "./Pages/Vegetarian.jsx";
import { setOpen } from "./slice/CreateSlice.jsx";
import NonVegetarian from "./Pages/NonVegetarian.jsx";
import Diets from "./Pages/Diets.jsx";
import Snacks from "./Pages/Snacks.jsx";
import Region from "./Pages/Region.jsx";
import Search from "./Pages/Search.jsx";

const App = () => {
  return (
    <Provider store={Store}>
      <AppContent />
    </Provider>
  );
};

const AppContent = () => {
  const open = useSelector((state) => state.ui.open); // ✅ Now inside Provider
  const dispatch = useDispatch(); // ✅ Now inside Provider

  return (
    <Router>
      <Navbar open={open} setOpen={(value) => dispatch(setOpen(value))} />
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/vegetarian" element={<Vegetarian />} />
            <Route path="/non-vegetarian" element={<NonVegetarian />} />
            <Route path="/diets" element={<Diets/>} />
            <Route path="/snacks" element={<Snacks/>} />
            <Route path="/region" element={<Region/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
