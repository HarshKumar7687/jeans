import jwt from "jsonwebtoken"

const adminAuth = (req,res,next) => {
    try {
        let token = req.cookies.token

        if(!token){
            return res.status(400).json({message:"admin doesnt have token"})
        }

        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
            if(!verifyToken){
                return res.status(400).json({message:"admin doesnt have a valid token"})
            }
            
            req.adminEmail = process.env.ADMIN_EMAIL;
            next();

    } catch (error) {
        console.log("isAdmin Error")
        return res.status(500).json({message:`isAdmin Error: ${error}`})
    }
}

export default adminAuth;