import React from 'react';
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
         <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Mern Stack App
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Develop By Faizan Ahmad 
        </Typography>
      </Box>
    </div>
  )
}

export default About