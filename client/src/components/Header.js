import React,{useState} from 'react';
import "../App.css";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {NavLink,Link} from "react-router-dom";

const Header = () => {
  const [value,setValue]  = useState("")
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }}  position="sticky">

        <Toolbar>
        <Link to="/" className='logo'><Typography>Ecommerce Website</Typography></Link>
        <Tabs sx={{ml:"auto"}}
        textColor='white' 
        indicatorColor='secondary'
        value={value} 
        onChange={(e,val)=>setValue(val)}
        
        >
           <Tab LinkComponent={NavLink} to ="/" label = "Home" />
          <Tab LinkComponent={NavLink} to ="/add" label = "Add Product" />
          <Tab LinkComponent={NavLink} to ="/products" label = "Products" />
          <Tab LinkComponent={NavLink}  to ="/about" label = "About Us" />
        </Tabs>
        </Toolbar>

      
        
        
        </AppBar>  
    </div>
  )
}

export default Header