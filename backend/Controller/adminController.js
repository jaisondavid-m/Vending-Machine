import db from "../config/db.js"

export const AddProduct = (req,res)=>{
    const {product_name,product_price} = req.body;

    const sql = "INSERT INTO products (product_name,product_price) VALUES (?,?)"

    db.query(sql,[product_name,product_price],(err)=>{
        if(err) return res.status(500).json(err);
        res.json({ message: "Product Added Successfully" })
    })
}   