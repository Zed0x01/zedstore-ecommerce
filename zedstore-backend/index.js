const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3500;

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

// Routes imports
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const cartsRoute = require("./routes/cart");
const ordersRoute = require("./routes/order");
const checkoutRoute = require("./routes/stripe");

// Express Middlewares

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/carts", cartsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/checkout", checkoutRoute);
