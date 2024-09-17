const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
require("dotenv").config()

const corsConfig = {
  origin:'*',
  credential:true,
  methods:["GET","POST","PUT","DELETE"],
}

const signinController = require("./Controller/signin-controller")
const signupController = require("./Controller/signup-controller")
const authController = require("./Controller/auth-controller")
const cartController = require("./Controller/cart_controller")
const phoneController = require("./Controller/phones_controller")
const payment = require("./payment")

const app = express()
app.use(express.json())
app.use(cors())
app.options("",cors(corsConfig))
app.use("/signup",signupController)
app.use("/signin",signinController)
app.use("/auth",authController)
app.use("/cart",cartController)
app.use("/phone",phoneController)
app.use("/razor",payment)

const port = process.env.PORT || 5000;
const db = process.env.MONGODB_URI;

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);

});

const startServer = async () => {
  try {
    // Establish MongoDB connection
    await mongoose.connect(db);
    console.log('Connected to MongoDB');

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the process with a failure code
  }
};

// // Start the application
startServer();

export default app