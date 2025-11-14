import express from "express";
import { ShowProducts,loginUser } from "../Controller/userController.js";

const router = express.Router();

router.get("/product", ShowProducts);
router.post("/login",loginUser)

export default router;