const https = require("http");
const server= https.createServer((req,res)=>{
    if(req.url=="/") {
        res.end("Hello from the other side!");
    } 
    else if(req.url =="/about") {
        res.end("Hello from about US page!");
    }
    else if (req.url=="/contact-us") {
        res.end("Hello from Contact US Page!!");
    }
    else {
        res.writeHead(404, {"Content-Type":"text/html"});
        res.end("Error 404! Page not Found!");
    }
    
});
server.listen(8000,'127.0.0.1', ()=> {
    console.log("Server is running on the port 8000");
});