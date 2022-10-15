import  express  from "express";
import data from "../data.js";
import expressAsyncHandler from 'express-async-handler'; 
import ProducT from "../models/ProductModel.js";


const productRouter = express.Router()
productRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const products = await ProducT.find({});

      res.send(products);
    })
  );


  productRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => { 
      await ProducT.remove({}); 
      const createdProducts = await ProducT.insertMany(data.products);
      res.send({ createdProducts });
    })
  );


  productRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const product = await ProducT.findById(req.params.id); 
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );



export default productRouter