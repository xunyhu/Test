const http = require('http');

const server = http.createServer( (request,response) => {
    const ip = request.socket.remoteAddress;
    const port = request.socket.remotePort;
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    response.end(`你的ip地址是${ip},你的端口号是${port}`);
    //console.log(process.env.NODE_ENV);
}).listen(3000);