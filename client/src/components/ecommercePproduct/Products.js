import React,{useState,useEffect} from 'react';
import axios from "axios";
import Product from "./Product";
import {Grid} from '@mui/material';
import "./product.css";
const URL = "http://localhost:5000/products";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

const Products = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setProducts(data.products));
    }, []);
    console.log(products);
    return (
        <div className='card'>
        <Grid container spacing={2}>
        
            
        {
           
          products &&
            products.map((product, i) => (
               
                <Grid item xs={12} md={6} lg={3}><Product product={product} /></Grid>
               
             
            ))}
            
          </Grid>
         
          </div>
    
    );
}

export default Products