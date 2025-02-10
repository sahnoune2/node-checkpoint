const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1  style='color:blue'>hello node</h1>");
  res.end();
  console.log(res);
  
});

server.listen(3000, console.log("server is running "));
