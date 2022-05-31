const express = require('express');
const router = express.Router();


const productController = require("../controllers/productcontroller")



router.post('/createProduct', productController.createproduct);

router.put('/productupdate', productController.updateproduct)
    


module.exports = router;