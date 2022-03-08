
const express = require('express');
const app = express();

// middleware

const check = (req , res, next) => {
    const status = true;
    if(status){
        console.log("chào xếp!");
        next();
    }else{
        console.log("đi đâu đấy?");
    }
}

app.get("/api/products", check, (req,res) => {
     const products = [
            {id: 1 ,name:"Product A"},
            {id: 2 ,name:"Product B"},
        ];
    res.json(products)
})

// const server = http.createServer((req , res)=>{
//     console.log("url" ,req.url);
//     if(req.url === "/"){
//         res.setHeader('Content-Type', "text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>")
//     }else if(req.url === "/api/products"){
//         const products = [
//             {id: 1 ,name:"Product A"},
//             {id: 2 ,name:"Product B"},
//         ]
//         res.end(JSON.stringify(products));
//     }else{
//         console.log("bo may biet roi");
//     }
// });

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
*/