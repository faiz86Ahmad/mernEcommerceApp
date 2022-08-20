const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const router = require("./routes/productRoutes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000

// Middlewares
dotenv.config({path:'./config.env'})
app.use(express.json());

app.use(cors());
app.use("/products", router);



if(process.env.NODE_ENV=="production"){
    app.use(express.static("ecommerce/build"))
}




mongoose.connect(
    "mongodb+srv://admin:vuvjjzil5nHxvg22@cluster0.sr1qfuo.mongodb.net/ecommerceStore?retryWrites=true&w=majority"
).then(()=>console.log("database is connected"))
.then(()=>{
    app.listen(PORT)
})
.catch((err)=>console.log("err"))














//vuvjjzil5nHxvg22