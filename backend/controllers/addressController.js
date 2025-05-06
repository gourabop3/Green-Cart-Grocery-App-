import Address from "../models/address.js";


//add address 
// /apiaddress/add

export const addAddress = async(req, res) => {

    try {
        const userId = req.userId;
        const {address} = req.body;

        await Address.create({...address, userId})

        res.json({success: true, message: "Address added successfully!"})
        

    } catch (error) {
        console.error(error.message);
        return res.json({success: false, message : error.message})
    }
} 



//get the address
// /api/address/get

export const getAddress = async(req, res) => {

    try {
        
        const userId = req.userId;

        const addresses = await Address.find({userId})

        if(!addresses){
            res.json({success :false, message : "Please add an address first!"})
        }

        res.json({success: true, addresses})
        

    } catch (error) {
        console.error(error.message);
        return res.json({success: false, message : error.message})
    }
}