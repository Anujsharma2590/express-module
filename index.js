const http = require('http');
const fs = require('fs');

const url = require('url');


const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8', (err, data) => {
    const dataObj = JSON.parse(data);
})
        
const server = http.createServer((req, res) => {
      const pathName = req.url;

    if (pathName === '/get') {
        res.write('Welcome to the home page');
        res.end();
    } else if (pathName === '/get/users') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(data);
        res.end();
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world' 
        });
        res.write('<h1>page not found</h1>');
        res.end();
    }
  

});

server.listen(8002, '127.0.0.1', () => {
    console.log("listening to port 8002");
});