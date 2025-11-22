import express from 'express'
import { AddProduct } from '../Controller/adminController.js'
import {verifyToken} from "../middlewares/authMiddleware.js"
import { isAdmin } from '../middlewares/roleMiddleware.js'
import { ShowProducts } from '../Controller/userController.js'

const router = express.Router()

router.post('/product',verifyToken,isAdmin, AddProduct)
router.get("/product", ShowProducts);

export default router