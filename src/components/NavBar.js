import {  Button, Stack } from "@mui/material";
import "../App.css";
import { categories } from "../utils/constants";
import '../index.css'
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
const NavBar = ({selectedCategory,setSelectedCategory}) => {

 
  return (
    <Stack>
    <SearchBar/>
  
 
    </Stack>
    

  );
};

export default NavBar;
