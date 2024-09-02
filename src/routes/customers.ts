import { getCustomers } from "@/controllers/customers"
import express  from "express"
const customerRouter=express.Router()


customerRouter.get('/customers',getCustomers)
// customerRouter.get('/api/v2/customers',getV2Customers)
export default customerRouter