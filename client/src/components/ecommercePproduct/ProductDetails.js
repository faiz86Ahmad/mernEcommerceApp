import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";

const ProductDetails = () => {
const [inputs, setInputs] = useState();    
const id = useParams().id
const history = useNavigate();

useEffect(()=>{

    const fetchHandler = async()=>{

        await axios.get(`https://mernfaizecommerce.herokuapp.com/products/${id}`)
        .then((res)=>res.data)
        .then((data) => setInputs(data.product));

    }

    fetchHandler()

},[id])
const sendRequest = async () => {
    await axios
      .put(`https://mernfaizecommerce.herokuapp.com/products/${id}`, {
        name: String(inputs.name),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/products"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (

    <div>
         {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
           
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
           

            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  )
}

export default ProductDetails;