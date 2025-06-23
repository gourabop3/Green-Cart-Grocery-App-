import mongoose from "mongoose";
import fs from 'fs'



import Product from "./models/product.js";

const uri = `mongodb+srv://gourabmullick200:gourab123@cluster0.zhtwag1.mongodb.net/my_fix`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const products = JSON.parse(fs.readFileSync('mockProducts_no_id.json', 'utf-8'));


Product.insertMany(products)
  .then(() => {
    console.log('Data inserted successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
    mongoose.disconnect();
  });
