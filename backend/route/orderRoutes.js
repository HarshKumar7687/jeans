import express from "express"
import isAuth from "../middleware/isAuth.js"
import adminAuth from "../middleware/adminAuth.js"
import { allOrders, placeOrder, updateStatus, userOrders } from "../controller/orderController.js"

const orderRoutes = express.Router()


orderRoutes.post("/placeOrder",isAuth,placeOrder)
orderRoutes.post("/userOrder",isAuth,userOrders)
orderRoutes.post("/list",adminAuth,allOrders)
orderRoutes.post("/status",adminAuth,updateStatus)

export default orderRoutes