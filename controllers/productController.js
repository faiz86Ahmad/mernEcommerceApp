const Product = require("../models/Products");

const getAllProducts = async (req, res, next) => {
    let products;
    try {
      products = await Product.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ products });
  };


  const addProduct = async(req,res,next)=>{
    let product;

    const {name,description,price,available,image} = req.body;

    try{

    product = new Product({
        name,
        description,
        price,
        available,
        image

    })
    await product.save()

} catch (err){
    console.log(err)
}

if(!product){
    return res.status(500).json({meassage:" product not added"})
}

return res.status(201).json({product})

  }

  const getById = async(req,res,next)=>{
    const id=req.params.id;
    let product;

    try{
        product = await Product.findById(id)
    } catch(err){
        console.log(err)
    }
if(!product){
    return res.status(404).json({message:"product not found"})
}
return res.status(200).json({product})

  }

  const productUpdate = async(req,res,next)=>{
    const id=req.params.id;
    const {name,description,price,available,image} = req.body;
    let product;

    try{
        product = await Product.findByIdAndUpdate(id,{
            name,
            description,
            price,
            available,
            image
        })
       product =  await product.save()
    } catch(err){
        console.log(err)
    }
    if(!product){
        return res.status(404).json({message:"product not updated"})
    }
    return res.status(200).json({product})


  }
  const productDelete = async (req,res,next)=>{
    const id = req.params.id;
    let product;

    try{
        product = await Product.findByIdAndRemove(id)
    } catch(err){
        console.log(err)
    }
    if(!product){
        return res.status(404).json({message:"product unable  to deleted by this is"})
    }
    return res.status(200).json({message:"product deleted successfully"})

  }


exports.getAllProducts = getAllProducts;
exports.addProduct=addProduct;
exports.getById = getById;
exports.productUpdate = productUpdate;
exports.productDelete = productDelete;