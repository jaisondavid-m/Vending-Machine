import db from "../config/db.js"
import bcrypt from "bcrypt";

export const registerUser = async (req,res)=>{
    const { email, password } = req.body;

    const checksql = "SELECT * FROM users WHERE email = ?";

    db.query(checksql,[email],async(err,result)=>{
         if (err) return res.status(500).json(err);

        if (result.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedpassword = await bcrypt.hash(password,10);
        // const isMatch = (password === user.password);

        const sql = "INSERT INTO users (email,password,role) VALUES (?,?,'user')"

        db.query(sql,[email,hashedpassword],(err)=>{
            if (err) return res.status(500).json(err);

            res.json({message:"user Register Successfully"});
        })
    })
}