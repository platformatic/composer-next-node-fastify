import { createServer } from 'node:http';

let count = 0

const server = createServer((req, res) => {
  console.log('received request', req.url)
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ content: `from node:http createServer: ${count++}!` }));
})

server.listen(0, () => {
  console.log('server is listening on port', server.address().port)
})
