const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an error
  throw new Error('Something went wrong!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});