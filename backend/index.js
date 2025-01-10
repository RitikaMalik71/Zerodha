require('dotenv').config();
const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors =require("cors");
const cookieParser = require("cookie-parser");

const {UserModel}=require("./model/UserModel");
const {PositionModel} =require("./model/PositionModel");
const {HoldingModel}=require("./model/HoldingModel");
const {OrderModel}=require("./model/OrderModel");
const { createSecretToken } = require("../backend/util/SecretToken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const port = 8080;
const uri=process.env.MONGO_URL;


const app=express();

app.use(bodyParser.json());


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connected successfully");
}).catch((error) => {
  console.error("Error connecting to database:", error);
});
app.listen(port,()=>{
    console.log("app is started");
    
});

app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());



app.post("/signup",async (req, res,next) => {
    try {
      const { email, username,  password, } = req.body;
     
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
      const user = await UserModel.create({ email,  username, password});
      

     const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
    
      res
        .status(201)
        .json({message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
      console.error(error);
    }
  }
);

app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UserModel.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true , user: { username: user.username }});
     next()
  } catch (error) {
    console.error(error);
  }
}
);


app.post("/",(req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await UserModel.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
});
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ success: true, message: "Logged out successfully" });
});
  app.get("/allHoldings", async (req,res)=>{
    let allHoldings =await HoldingModel.find({});
    res.json(allHoldings);
    });
    app.get("/allPositions", async (req,res)=>{
        let allPositions =await PositionModel.find({});
        res.json(allPositions);
        });
    app.get("/allOrders", async (req,res)=>{
      let allOrders =await OrderModel.find({});
    res.json(allOrders);
    })
      
          app.post("/newOrder", async (req, res) => {
            try {
              // Step 1: Create a new order
              const { name, qty, price, mode } = req.body;
            
          
              // Validate the request body
              if (!name || !qty || !price || !mode) {
                return res.status(400).json({ message: "All fields are required" });
              }
          
              // Create and save the new order
              let newOrder = new OrderModel({
                name,
                qty,
                price,
                mode,
              });
              await newOrder.save();
          
              // Step 2: Update Holdings
              const existingHolding = await HoldingModel.findOne({ name });
          
              if (mode === "BUY") {
                // If the mode is 'buy', add the quantity to existing holdings
                if (existingHolding) {
                  existingHolding.qty += qty;
                  existingHolding.price = price; // Update the price to reflect the latest
                  await existingHolding.save();
                } else {
                  // If no existing holding, create a new one
                  const newHolding = new HoldingModel({
                    name,
                    qty,
                    price,
                  });
                  await newHolding.save();
                }
              } else if (mode === "SELL") {
                // If the mode is 'sell', reduce the quantity or remove the holding
                if (existingHolding) {
                  if (existingHolding.qty < qty) {
                    return res
                      .status(400)
                      .json({ message: "Not enough quantity in holdings to sell" });
                  }
                  existingHolding.qty -= qty;
         
                  if (existingHolding.qty === 0) {
                    // If quantity becomes zero, remove the holding
                    await HoldingModel.deleteOne({ name });
                  } else {
                    await existingHolding.save();
                  }
                } else {
                  return res
                    .status(400)
                    .json({ message: "Cannot sell an item not in holdings" });
                }
              }
          
              // Step 3: Respond with success
              res.status(201).json({
                message: "Order saved and holdings updated successfully",
                order: newOrder,
              });
            } catch (error) {
              console.error("Error in /newOrder:", error);
              res.status(500).json({ message: "Internal Server Error" });
            }
          });
          
           
   