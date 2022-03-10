import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "../routes/product"
const app = express();

// middleware

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json())


app.use("/api",productRoute)

const PORT= 3001;
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