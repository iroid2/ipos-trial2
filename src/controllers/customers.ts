import { Request, Response } from "express";

export async function getCustomers(req:Request,res:Response) {
    const customers=[
        {
            name:"iroid",
            title:"Web developer/ Accountant",
            email:"iradtu2@gmail.com",
    
        },
        {
            name:"Komweru",
            title:"Accountant",
            email:"komdebz@gmail.com",
            
        },
        {
            name:"Nawie",
            title:"Sales Executive",
            email:"nawiesonia23@gmail.com",
            
        }
    
    ]
    return res.status(200).json(customers)
}
export async function getSingleCustomer(req:Request,res:Response) {
    const {id} =req.params
    const customer=[
        {
            name:"SOnia",
            title:"Web   expert/ Accountant",
            email:"sonia12@gmail.com",
            location:"New York"
        }
    ]
    const customer=customer.find((customer.id==id))
    
}