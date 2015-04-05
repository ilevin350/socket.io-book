// Include the 'http' nodejs core module (binary)
var http = require("http");

// Create an HTTP server and include the callback function
// needed to handle incoming HTTP requests.  In this case,
// we simply render some HTML in our response.  Finally,
// we tell the server to listen on port 3001
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});  // Write HTTP response status code and headers
  response.write("<html>");                                // ---
  response.write("<head><title>Node.js</title></head>");   // |__ Write HTTP response body
  response.write("<body>Hello Web</body>");                // |
  response.write("</html>");                               // ---
  response.end();                                          // End the HTTP response
}).listen(3001);