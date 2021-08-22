
const http = require("http");
 const url = require('url');

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         //res.send("hello9 hgom epage");
//         res.end("this is main page");;
//     } else {
//         res.end('i am not listening ');
//     }
    
    
// })

// server.listen('8001','127.0.0.1', () => {
//     console.log("listering to port 8001");
// })
    const data = {
    name: "anuj"
}
const server = http.createServer((req, res) => {
    //console.log(req.url);
    const pathName = req.url;

    if (pathName === '/overview') {
        res.write('this is overview ');
        res.end();
    } else if (pathName === '/product') {
        res.write('this is the product');
        res.end();
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world' //own header
        });
        res.write('<h1>page not found</h1>');
        res.end();
    }
});

server.listen('8001','127.0.0.1', () => {
    console.log("listering to port 8001");
})









