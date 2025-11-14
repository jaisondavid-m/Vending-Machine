import db from "../config/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const loginUser = (req,res)=>{
  const {email,password} = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";


  db.query(sql,[email],async (err,result)=>{
    if(err) return res.status(500).json(err);
    if(result.length === 0)
      return res.status(401).json({message : "Invalid Email or Password"})

    const user = result[0];

    const isMatch = await bcrypt.compare(password,user.password);
    // const isMatch = (password === user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      {id:user.id,role:user.role},
      process.env.JWT_SECRET,
      {expiresIn:"1d"}
    );
    return res.json({
      message : "Login Successfully",
      role : user.role,
      token
    })
  })
}




export const ShowProducts = (req, res) => {

    const sql = "SELECT id, product_name, product_price FROM products";


    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};
