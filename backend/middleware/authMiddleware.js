const jwt = require ("jsonwebtoken");

const authMiddleware = (req,res,next)=>{
    try{
        console.log("Authorization Header:", req.headers.authorization);

        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message:"no token ,authorization denied",

            });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message:"Token in not valid"});
    }
    
};
module.exports = authMiddleware;