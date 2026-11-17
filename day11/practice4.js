const http = require('http');

const html = `<!DOCTYPE html>
<form id="f" style="font-family:sans-serif;display:flex;flex-direction:column;gap:8px;max-width:260px">
  <h3>Welcome to Website</h3>
  <html>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(3000, () => console.log('Running on http://localhost:3000'));
