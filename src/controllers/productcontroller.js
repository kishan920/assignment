const proModel = require("../models/productmodel")
const createproduct = async function (req, res) {
    try {
        const requestBody = req.body;
const empoData = await proModel.create({
    productName,quantity,description
});
res.status(201).send({ status: true, message: ' product creates Successfully', data: empoData })

} catch (error) {
res.status(500).send({ status: false, msg: error.message })
}

};
const updateproduct = async function (req, res) {
    try {
         const reqbody=req.body
         for(let i=0;i<reqbody.length;i++)
         {
             let product= await proModel.findOne({ _id: reqbody[i]._id })
             if(reqbody[i].operation==add)
             {
                 let quantity1=reqbody[i].quantity
                 let quantity2=product.quantity
                 let upquantuty=quantity1+quantity2
                let updateprofile = await empoModel.findOneAndUpdate({ _id: reqbody[i]._id, isDeleted: false },
                    { quantity:upquantuty}, { new: true })
             }
             if(reqbody[i].operation==subtract)
             {
                 let quantity1=reqbody[i].quantity
                 let quantity2=product.quantity
                 let upquantuty=quantity2-quantity1
                let updateprofile = await empoModel.findOneAndUpdate({ _id: reqbody[i]._id, isDeleted: false },
                    { quantity:upquantuty}, { new: true })
             }
         }
         res.status(200).send({ status: true, msg: "product has been updated" })
    }
        catch (error) {
            res.status(500).send({ status: false, msg: error.message })
            }
            
            };
module.exports = { createproduct,updateproduct }