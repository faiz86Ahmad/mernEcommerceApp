
import "./product.css";
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link ,useNavigate} from "react-router-dom";
import axios from  'axios'


const Product = (props) => {
    const {_id,image,name,description,price} = props.product
    const history = useNavigate();

    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5000/products/${_id}`)
          .then((res) => res.data)
          window.location.reload();
        
         
         
      };
  return (
   
    <Card sx={{ maxWidth: 345}} >
   <img className="img" src={image} alt={name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
      <Typography sx={{mt:"10px"}} gutterBottom variant="h5" component="div">
        Rs {price}
      </Typography>
    
    </CardContent>
    <CardActions>
      <Button size="small" LinkComponent={Link} to={`/products/${_id}`}>update</Button>
      <Button size="small"  onClick={deleteHandler}>delete</Button>
    </CardActions>
  </Card>

  
 
  )
}

export default Product