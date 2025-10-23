import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {
        // FIX: Get the token string, not the cookies object
        let token = req.cookies.token

        if(!token){
            return res.status(400).json({message:"user doesnt have token"})
        }

        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({message:"user doesnt have a valid token"})
        }
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        console.log("isAuth Error")
        return res.status(500).json({message:`isAuth Error: ${error}`})
    }
}

export default isAuth