import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import productRoute from "../routes/product"
import postRoute from "../routes/post"
import userRoute from "../routes/auth"
import categoryRoute from "../routes/category"

const app = express();


// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json())

// route
app.use("/api",productRoute)
app.use("/api",postRoute)
app.use("/api",userRoute)
app.use("/api",categoryRoute)



// connect database
mongoose.connect("mongodb://localhost:27017/nodejs")
.then(()=> console.log("Connect db ok~"))
.catch((error)=> console.log(error))

// connection
const PORT= 8000;
app.listen(PORT, () => {{
    console.log("Server is running port" ,PORT);
}});

/**
* npm i -g json-server: Cài đặt module vào ổ hệ thống
* npm i --save express: 
* - khi sử dụng npm i mặc định đc cài đặt luôn
* - bắt buộc phải có module này thì mới chạy được
* dependencies: {"express": 1.2.3}
* npm i --save-dev nodemon
* npm i --save-pres

* npm i babel-cli babel-preset-env babel-preset-stage-0
* npm i cors
*/