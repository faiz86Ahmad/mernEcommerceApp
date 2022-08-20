const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController")

router.get("/",productController.getAllProducts)
router.post("/",productController.addProduct)
router.get("/:id",productController.getById)
router.put("/:id",productController.productUpdate)
router.delete("/:id",productController.productDelete)




module.exports = router;