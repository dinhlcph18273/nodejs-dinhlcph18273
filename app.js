
const http = require('http');

const server = http.createServer((req , res)=>{
    console.log("url" ,req.url);
    if(req.url === "/"){
        console.log("Home Page");
    }else if(req.url === "/api/products"){
        console.log("Products API");
    }else{
        console.log("Chịu chả biết gì");
    }
});

const PORT= 3001;
server.listen(PORT, () => {{
    console.log("Server is running port" ,PORT);
}});