import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './route/authRoutes.js'
import cors from 'cors'
import userRoutes from './route/userRoutes.js'
import productRoutes from './route/productRoutes.js'
import cartRoutes from './route/cartRoutes.js'
import orderRoutes from './route/orderRoutes.js'

dotenv.config()

let port = process.env.PORT || 6000

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["https://jeans-frontend.onrender.com","https://jeans-admin.onrender.com"],
    credentials: true,
}))


app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)

app.listen(port,()=>{
    console.log("Server running on port 8000")
    connectDb()
})
