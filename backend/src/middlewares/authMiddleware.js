import jwt from "jsonwebtoken"

export const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    
    if(!token){
        return res.status(401).json({message:"Unauthorised : No Token Provided"});
    }

    jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
        if(err)
            return res.status(403).json({message:"INvalid Token"});
        req.user = user;
        next();
    })
}