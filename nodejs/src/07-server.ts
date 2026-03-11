import http from 'http'

const server = http.createServer((req, resp) => {
  resp.writeHead(200, {'Content-Type': 'text/plain'})

  resp.end("Hello world");
})

server.listen(3000, '127.0.0.1', () => {
  console.log('server running');
})
